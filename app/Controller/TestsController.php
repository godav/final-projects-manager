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
    

//    
//      function fileUpload(){
//          //  $this->autoRender = false;
//            echo $this->request->data('file');
//            $data = $this->request->data('file');
//            pr($data);
//            // upload the file to the server
//            $fileOK = $this->uploadFiles('img/files', $this->data['file']);
//            pr($fileOK);
//        }


    

}