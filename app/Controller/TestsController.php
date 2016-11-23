<?php
App::uses('AppController', 'Controller');

class TestsController extends AppController {

     function index()
//    {            echo $this->request->data('file');
     {
            $data = $this->request->params;
            pr($data);
            // upload the file to the server
//            $fileOK = $this->uploadFiles('img/files', $this->data['file']);
//            pr($fileOK);
            
    }
    
  function json_checklogin(){
 
//           $this->autoRender = false;
            $email = 'godav@walla.com';
            $password = 'a280684a'; 

          $this->loadModel('User');
          
          $register = $this->User->find('first', array(
                                'conditions' => array('User.email' => $email,'User.password' => $password),
                                'fields' => array('User.first_name, User.last_name','User.id')
                 )); 
          pr($register);
          $data['register'] = false;
          $data['fname'] = null;
          $data['lname'] = null;
          $data['id'] = null;
          
          if (!empty($register)){
               $data['register'] = true;
               $data['fname'] = $register['User']['first_name'];
               $data['lname'] = $register['User']['last_name'];
               $data['id'] = $register['User']['id'];
          }                       
          pr($data);

    }     
    
}