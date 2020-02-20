<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class UserModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct("users", ["first_name", "last_name", "type", "username", "password"]);
        }

        public function login(object $userData): array
        {
            $loginQuery = "SELECT * FROM users WHERE `username` = ? AND `password` = ?";

            try {
                $loginStmt = $this->connection->prepare($loginQuery);
                $loginStmt->execute([$userData->user, $userData->password]);
                $user = $loginStmt->fetchAll();

                return ["success" => true, "user" => $user];
            } catch (PDOException $e) {
                return ["success" => false, "message" => $e];
            }
        }
    }