<?php

    namespace Source\constrollers;
    use Source\models\UserModel;
    use Source\controllers\Controller;
    
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

            if ($isSuccessful) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }
    }