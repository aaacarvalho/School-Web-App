<?php 

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class SubjectModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct("subjects", ["name"]);
        }

        public function getAll(): array
        {
            try {
                $query = "SELECT id, name FROM subjects";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();
            
                $subjects = $stmt->fetchAll();
                return $subjects;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }
