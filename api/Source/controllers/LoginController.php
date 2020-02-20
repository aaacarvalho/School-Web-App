<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\UserModel;

    class LoginController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function login(): void
        {
            $userData = json_decode(file_get_contents('php://input'));

            $login = new UserModel();
            $user = $login->login($userData);

            if ($user["success"]) {
                parent::send(200, $user);
            } else {
                parent::send(500, []);
            }
        }
    }