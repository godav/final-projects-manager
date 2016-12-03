<!DOCTYPE html>
<html ng-app="app">
   <head>
      <title>ניהול פרוייקטי גמר בקורסי תפוח</title>
      <base href="<?php echo $this->webroot; ?>">
      <meta charset="utf-8">
      <meta name="description" content="Project Manager for tapuah courses" />
      <meta name="author" content="Avner Ainouz - Godav" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

  
    
      
   
      <!-- Scripts and Css Loading -->
      <?php           
            echo $this->Html->css(array('/css/bootstrap', '/css/screen','/css/modalLogin')); 
            echo $this->Html->css(array('/css/font-awesome','/css/slide-bar','/css/admin-dashboard')); 
            echo $this->Html->css(array('/css/bootstrap-theme','/css/elegant-icons-style','/css/style','/css/style-responsive')); 
            
            echo $this->Html->script(array('/js/jquery-3.1.1.min', '/js/bootstrap', '/js/functions'));
            echo $this->Html->script(array('/js/slide-bar'));
            echo $this->Html->script(array('/js/angular','/js/angular-route','/js/ngStorage.min'));
        
            echo $this->Html->script(array('/angular/app/app','/angular/app/route','/angular/app/services/fileService','/angular/app/services/StorageService'));
            echo $this->Html->script(array('/angular/directive/modalLogin','/angular/directive/modalRegister','/angular/directive/fileUpload','/angular/directive/angular-validator'));
            echo $this->Html->script(array('/angular/controllers/main','/angular/controllers/courses','/angular/controllers/projects','/angular/controllers/search','/angular/controllers/login','/angular/controllers/ManageUploadCtrl','/angular/controllers/registeration'));
        ?>
        
        

   </head>
   <body ng-controller="main">
        <?php 
                echo $this->fetch('content'); 
                
        ?>

   </body>
</html>