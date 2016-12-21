<?php

App::uses('AppModel', 'Model');

class User extends AppModel {
      var $name = 'User';
       public $actsAs = array('Containable');
       public $hasMany = array(
        'Photo' => array(
            'className' => 'Photo',
            'foreignKey' => 'user_id',       
            'dependent' => true
        )
    );
}
