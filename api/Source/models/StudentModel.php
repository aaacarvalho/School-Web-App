<?php

    namespace Source\Models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class StudentModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct("students", ["first_name", "last_name", "username", "cellphone", "email"]);
        }

        public function getAll(): array
        {
            $query = "SELECT id, first_name, last_name, cellphone, email, credits FROM students ORDER BY first_name ASC";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $students = $stmt->fetchAll();
                
                return $students;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }

        public function getStudent(int $id): object
        {
            try {
                $query = "SELECT * FROM students WHERE id = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$id]);

                $student = $stmt->fetch();

                return $student;                
            } catch (PDOException $e) {
                return ['message' => $e];
            }
        }

        public function updateCredits(int $id, int $credits): array
        {
            try {
                $query = "UPDATE students SET credits = ? WHERE id = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$credits, $id]);

                return ['success' => true, 'message' => 'A operação foi realizada com sucesso!'];
            } catch (PDOException $e) {
                return ['success' => false, 'message' => $e];
            }
        }
    }