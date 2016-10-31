<!DOCTYPE html>
<html>
   <head>
      <title>ניהול פרוייקטי גמר בקורסי תפוח</title>
      <meta charset="utf-8">
      <meta name="description" content="Project Manager for tapuah courses" />
      <meta name="author" content="Avner Ainouz - Godav" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Raleway:400,700" rel="stylesheet" />
      <link href="img/favicon.png" type="image/x-icon" rel="shortcut icon" />
      
      
      <!-- Scripts and Css Loading -->
      <?php 
            echo $this->Html->css(array( '/css/screen' ,'/css/bootstrap.min'));           
            echo $this->Html->script(array('/js/bootstrap.min', '/js/jquery-2.2.3.min','/js/functions','/js/jquery'));
        ?>
      

   </head>
   <body class="home" id="page">
        <?php 
                echo $this->fetch('content'); 
                
        ?>

   </body>
</html>