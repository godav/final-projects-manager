<!DOCTYPE html>
<html ng-app="app">
   <head>
      <title>ניהול פרוייקטי גמר בקורסי תפוח</title>
      <base href="<?php echo $this->webroot; ?>">
      <meta charset="utf-8">
      <meta name="description" content="Project Manager for tapuah courses" />
      <meta name="author" content="Avner Ainouz - Godav" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700" rel="stylesheet" />
      <link href="img/favicon.png" type="image/x-icon" rel="shortcut icon" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

   
      <!-- Scripts and Css Loading -->
      <?php           
            echo $this->Html->css(array('/css/bootstrap.min', '/css/screen','/css/modalLogin')); 
            echo $this->Html->script(array('/js/jquery-2.2.3.min', '/js/bootstrap.min', '/js/functions'));
            echo $this->Html->script(array('/js/angular','/js/angular-route'));
            echo $this->Html->script(array('/angular/app/app','/angular/app/route'));
            echo $this->Html->script(array('/angular/directive/modalLogin','/angular/directive/modalRegister'));
            echo $this->Html->script(array('/angular/controllers/main','/angular/controllers/courses','/angular/controllers/projects','/angular/controllers/search','/angular/controllers/login'));
        ?>
      

   </head>
   <body ng-controller="main">
        <?php 
                echo $this->fetch('content'); 
                
        ?>

   </body>
</html>