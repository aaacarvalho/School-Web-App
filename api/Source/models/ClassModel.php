<?php 

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class ClassModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('classes', ['student', 'teacher', 'subject', 'classroom', 'schedule']);
        }

        public function getAll(string $date): array
        {
            try {
                $query = "SELECT id, student, subject, teacher, classroom, schedule, time, duration, status, student_comments, teacher_comments 
                            FROM classes 
                            WHERE schedule = ?
                            ORDER BY time ASC";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$date]);
            
                $classes = $stmt->fetchAll();
                return $classes;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }

        public function findTeacherClasses(string $username, string $date): array
        {
            if ($date == 0) {
                $schedule = "";
                $params = [$username];
            } else {
                $schedule = "AND c.schedule = ?";
                $params = [$username, $date];
            }

            try {
                $query = "SELECT c.id, st.first_name, st.last_name, s.name as subject, cl.name as classroom_name, c.schedule, c.time, c.status, c.duration, c.teacher_comments, c.student_comments
                 FROM classes c, students st, classrooms cl, subjects s, teachers t
                 WHERE t.username = ? AND c.teacher = t.id AND c.subject = s.id AND c.student = st.id AND c.classroom = cl.id $schedule";
                $stmt = $this->connection->prepare($query);
                $stmt->execute($params);

                $classes = $stmt->fetchAll();

                return $classes;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }

        public function findStudentClasses(string $username, string $date): array
        {
            if ($date == 0) {
                $schedule = "";
                $params = [$username];
            } else {
                $schedule = "AND c.schedule = ?";
                $params = [$username, $date];
            }

            try {
                $query = "SELECT c.id, t.first_name, t.last_name, s.name as subject, cl.name as classroom_name, c.schedule, c.time, c.status, c.duration, c.student_comments, c.teacher_comments
                          FROM classes c, teachers t, classrooms cl, subjects s, students st
                          WHERE st.username = ? AND st.id = c.student AND c.subject = s.id AND c.teacher = t.id AND c.classroom = cl.id $schedule";
                $stmt = $this->connection->prepare($query);
                $stmt->execute($params);

                $classes = $stmt->fetchAll();

                return $classes;
            } catch (PDOException $e) {
                return ["message" => $e];
            }
        }

        public function updateStatus(int $id, int $status): array
        {
            try {
                $query = "UPDATE classes SET status = ? WHERE id = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$status, $id]);

                return ["success" => true, "message" => "A operação foi realizada comn sucesso!"];
            } catch (PDOException $e) {
                return ["success" => false, "message" => $e];
            }
        }

        public function createComments(object $data): array
        {
            if ($data->type == 2) {
                $field = 'teacher_comments';
            } else if ($data->type == 3) {
                $field = 'student_comments';
            }

            try{
                $query = "UPDATE classes SET $field = ? WHERE id = ?";
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$data->comment, $data->id]);

                return ["success" => true];
            } catch (PDOException $e) {
                return ["success" => false, "message" => $e];
            }
        }
    }