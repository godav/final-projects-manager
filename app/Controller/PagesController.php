<?php

/**
 * Static content controller.
 *
 * This file will render views from views/pages/
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.Controller
 * @since         CakePHP(tm) v 0.2.9
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */
App::uses('AppController', 'Controller');

/**
 * Static content controller
 *
 * Override this controller by placing a copy in controllers directory of an application
 *
 * @package       app.Controller
 * @link http://book.cakephp.org/2.0/en/controllers/pages-controller.html
 */
class PagesController extends AppController {

    /**
     * This controller does not use a model
     *
     * @var array
     */
    public $uses = array();

    /**
     * Displays a view
     *
     * @param mixed What page to display
     * @return void
     * @throws NotFoundException When the view file could not be found
     * 	or MissingViewException in debug mode.
     */
    public function display() {
        $path = func_get_args();

        $count = count($path);
        if (!$count) {
            return $this->redirect('/');
        }
        $page = $subpage = $title_for_layout = null;

        if (!empty($path[0])) {
            $page = $path[0];
        }
        if (!empty($path[1])) {
            $subpage = $path[1];
        }
        if (!empty($path[$count - 1])) {
            $title_for_layout = Inflector::humanize($path[$count - 1]);
        }
        $this->set(compact('page', 'subpage', 'title_for_layout'));

        try {
            $this->render(implode('/', $path));
        } catch (MissingViewException $e) {
            if (Configure::read('debug')) {
                throw $e;
            }
            throw new NotFoundException();
        }
    }

    function json_checklogin() {

        $this->autoRender = false;
        $email = $this->request->data('email');
        $password = $this->request->data('password');

        $this->loadModel('User');

        $register = $this->User->find('first', array(
            'conditions' => array('User.email' => $email, 'User.password' => $password),
            'fields' => array('User.first_name, User.last_name', 'User.id')
        ));

        $data['register'] = false;
        $data['fname'] = null;
        $data['lname'] = null;
        $data['id'] = null;

        if (!empty($register)) {
            $data['register'] = true;
            $data['fname'] = $register['User']['first_name'];
            $data['lname'] = $register['User']['last_name'];
            $data['id'] = $register['User']['id'];
        }
        return json_encode($data);
    }

    function json_checkemail() {
        $this->autoRender = false;
        $email = $this->request->data('email');

        $this->loadModel('User');

        $exists = $this->User->find('first', array(
            'conditions' => array('User.email' => $email)
        ));

        return json_encode($exists);
    }

    function fileUpload() {
        $this->autoRender = false;
        echo $this->request->data('file');
        $data = $this->request->data('file');
        pr($data);
        // upload the file to the server
        $fileOK = $this->uploadFiles('img/files', $this->data['file']);
//            pr($fileOK);
    }

    function json_registerUser() {
        $this->autoRender = false;
        $response = "";

        $this->loadModel('User');
        if ($this->data != null)
            $response = $this->User->save($this->data);

        return json_encode($response);
    }

    function json_updateUser() {
        $this->autoRender = false;
        $response = "";

        $this->loadModel('User');
        if ($this->data != null)
            $response = $this->User->save($this->data);

        return json_encode($response);
    }

    function json_getUserProfile() {
        $this->autoRender = false;
        $id = $this->request->data('id');

        $this->loadModel('User');

        $response = $this->User->find('first', array(
            'conditions' => array('User.id' => $id)
        ));

        return json_encode($response);
    }

    function json_pictureUpload() {

        $this->autoRender = false;

        $folder = $this->request->data['folder'];
        $file = $this->request->params;
        $id = $this->request->data['id'];
        // upload the file to the server
        $fileOK = $this->uploadFiles($folder, $file['form'], $id);
        return json_encode($fileOK);
    }

    function json_addPhotoToUser() {
        $this->autoRender = false;
        $response = "";

        $this->loadModel('User');
        if ($this->data != null) {

            $data = array(
                'Photo' => $this->data,
                'User' => array('id' => $this->data['user_id'])
            );

            $response = $this->User->Photo->saveAll($data);
        }

        return json_encode($response);
    }

    function json_getUserGallery() {
        $this->autoRender = false;
        $response = "";

        $this->loadModel('Photo');
        if ($this->data != null) {

            $response = $this->Photo->find('all', array(
                'conditions' => array('Photo.user_id =' => $this->data['user_id']),
                'order' => array('Photo.upload_date DESC')
            ));
        }

        return json_encode($response);
    }

    function json_deletePhotoToUser() {
        $this->autoRender = false;
        $response = "";
//        pr ($this->data);
        $this->loadModel('Photo');
        if ($this->data != null) {

            $ans1 = $this->Photo->delete($this->data['id']);

            if ($ans1) {
                $ans2 = $this->deleteFiles($this->data['photo_location']);
                if ($ans2) {
                    $response = $this->Photo->find('all', array(
                        'conditions' => array('Photo.user_id =' => $this->data['user_id']),
                        'order' => array('Photo.upload_date DESC')
                    ));
                }
            }
        }

        return json_encode($response);
    }

    function json_getDashBoard() {
        $this->autoRender = false;
        $id = $this->request->data('id');

        $this->loadModel('User');

        $data = $this->User->find('first', array(
            'conditions' => array('User.id' => $id)
        ));

        $response['gituser'] = $data['User']['gituser'];
        $response['gitproject'] = $data['User']['gitproject'];

        $this->loadModel('Photo');
        $count = $this->Photo->find('count', array(
            'conditions' => array('Photo.user_id' => $id)
        ));
        
        $response['count'] = $count;

        return json_encode($response);
    }
    
    
        function json_getProjects() {
        $this->autoRender = false;
       

        $this->loadModel('User');
        $this->loadModel('Photo');
       $response= $this->User->find('all')->Photo->find('first',array('order'=> array('photos.upload_date DESC')));
       


        return json_encode($response);
    }

}
