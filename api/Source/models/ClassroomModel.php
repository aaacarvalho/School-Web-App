<?php 

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class ClassroomModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct("classrooms", ["name"]);
        }

        public function getAll(): array
        {
            try {
                $query = "SELECT id, name FROM classrooms";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();
            
                $classrooms = $stmt->fetchAll();
                return $classrooms;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }
    }
