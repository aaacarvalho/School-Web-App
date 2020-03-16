<?php

    namespace Source\controllers;
    use Source\models\UserModel;
    use Source\controllers\Controller;

    header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Headers: *");
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    
    class UserController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }
    
        public function create(): void
        {
            $userData = json_decode(file_get_contents('php://input'));
            $user = new UserModel();

            $user->first_name = $userData->first_name;
            $user->last_name = $userData->last_name;
            $user->type = $userData->type;
            $user->username = $userData->username;
            $user->password = $userData->password;
            
            $user->save();
            $isSuccessful = parent::isSuccessful($user);

            if ($isSuccessful["success"]) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }

        public function getAll(): void
        {
            $users = (new UserModel())->getAll();
  
            if ($users && !empty($users)) {
                parent::send(200, $users);
            } else {
                parent::send(204, []);
            }
        }
    }