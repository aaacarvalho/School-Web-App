<?php 

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class TeacherModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct("teachers", ["first_name", "last_name", "email", "cellphone", "subject"]);
        }

        public function getAll(): array
        {
            try {
                $query = "SELECT t.id, first_name, last_name, credits, cellphone, email, s.name as subject
                FROM teachers t, subjects s
                WHERE t.subject = s.id";
                $stmt = $this->connection->prepare($query);
                $stmt->execute();
            
                $teachers = $stmt->fetchAll();
                return $teachers;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }

        public function getTeacher(int $id): object
        {
            try {
                $query = "SELECT * FROM teachers WHERE id = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$id]);

                $teacher = $stmt->fetch();

                return $teacher;                
            } catch (PDOException $e) {
                return ['message' => $e];
            }
        }

        public function updateCredits(int $id, int $credits): array
        {
            try {
                $query = "UPDATE teachers SET credits = ? WHERE id = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$credits, $id]);

                return ['success' => true, 'message' => 'A operação foi realizada com sucesso!'];
            } catch (PDOException $e) {
                return ['success' => false, 'message' => $e];
            }
        }
    }
