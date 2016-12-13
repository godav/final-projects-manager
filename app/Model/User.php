<?php

App::uses('AppModel', 'Model');

class User extends AppModel {
      var $name = 'User';
      
       public $hasMany = array(
        'Photo' => array(
            'className' => 'Photo',
            'foreignKey' => 'user_id',       
            'dependent' => true
        )
    );
}
