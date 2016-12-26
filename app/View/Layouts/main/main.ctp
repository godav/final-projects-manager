<!DOCTYPE html>
<html ng-app="app">
    <head>
        <title>ניהול פרוייקטי גמר בקורסי תפוח</title>
        <base href="<?php echo $this->webroot; ?>">
        <meta charset="utf-8">
        <meta name="description" content="Project Manager for tapuah courses" />
        <meta name="author" content="Avner Ainouz - Godav" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">


        <!-- Scripts and Css Loading -->
      <?php           
            echo $this->Html->css(array('/css/bootstrap', '/css/screen','/css/modalLogin')); 
            echo $this->Html->css(array('/css/slide-bar','/css/admin-dashboard','/css/magnific-popup')); 
            echo $this->Html->css(array('/css/bootstrap-theme','/css/elegant-icons-style','/css/style','/css/style-responsive')); 
            echo $this->Html->css(array('/css/AdminLTE','/css/print'));
            
            echo $this->Html->script(array('/js/jquery-3.1.1.min', '/js/bootstrap', '/js/functions'));
            echo $this->Html->script(array('/js/slide-bar','/js/jquery.magnific-popup','/js/underscore-min','/js/masonry.pkgd.min','/js/imagesloaded.3.1.8.min'));
            echo $this->Html->script(array('/js/angular','/js/angular-route','/js/ngStorage.min','/js/highcharts','/js/ui-bootstrap.min','/js/angular-masonry'));
            
            echo $this->Html->script(array('/angular/app/app','/angular/app/route','/angular/app/services/fileService','/angular/app/services/StorageService'));
            echo $this->Html->script(array('/angular/directive/modalLogin','/angular/directive/modalRegister','/angular/directive/fileUpload','/angular/directive/angular-validator','/angular/directive/addPhoto','/angular/directive/photoUpload','/angular/directive/ngRemoteValidate'));
            echo $this->Html->script(array('/angular/controllers/main','/angular/controllers/courses','/angular/controllers/projects','/angular/controllers/search','/angular/controllers/login'));
            echo $this->Html->script(array('/angular/controllers/registeration','/angular/controllers/profileUpdate','/angular/controllers/addition'));
             echo $this->Html->script(array('/angular/controllers/userGallery','/angular/controllers/dashboard','/angular/controllers/search-results','/angular/controllers/project-review'));
             
        ?>




    </head>
    <body ng-controller="main">
        <?php 
                echo $this->fetch('content'); 
                
        ?>

    </body>
</html>