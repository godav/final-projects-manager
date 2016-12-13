<?php

App::uses('AppModel', 'Model');

class Photo extends AppModel {
      var $name = 'Photo';
      
      public $belongsTo = array(
        'User' => array(
            'className' => 'User',
            'foreignKey' => 'user_id'
        )
    );
}
