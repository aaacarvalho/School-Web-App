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
            parent::__construct("users", ["first_name", "last_name", "username", "password"]);
        }

        public function login(object $userData): array
        {
            $loginQuery = "SELECT id, first_name, last_name, username, type FROM users WHERE `username` = ? AND `password` = ?";

            try {
                $loginStmt = $this->connection->prepare($loginQuery);
                $loginStmt->execute([$userData->user, $userData->password]);
                $user = $loginStmt->fetchAll();

                return ["success" => true, "user" => $user];
            } catch (PDOException $e) {
                return ["success" => false, "message" => $e];
            }
        }

        public function getAll(): array
        {
            try{
                $query = "SELECT id, first_name, last_name, username, type FROM users";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();
                
                $users = $stmt->fetchAll();
                return $users;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }

        public function getUserByUsername(string $username)
        {
            try {
                $query = "SELECT * FROM users WHERE username = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$username]);

                $student = $stmt->fetch();

                return $student;                
            } catch (PDOException $e) {
                return ['message' => $e];
            }
        }
    }