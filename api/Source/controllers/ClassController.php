<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\ClassModel;
    use Source\models\StudentModel;
    use Source\models\TeacherModel;

    class ClassController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function create(): void
        {
            $classData = json_decode(file_get_contents('php://input'));
            $class = new ClassModel();
            $studentModel = new StudentModel();
            $teacherModel = new TeacherModel();
            $student = $studentModel->getStudent($classData->student);
            $teacher = $teacherModel->getTeacher($classData->teacher);

            foreach ($classData as $key => $value) {
                $class->$key = $value;
            }

            $time = explode(":", $class->duration);
            $time = $time[0]*60 + $time[1]*1;

            if ($time > intval($student->credits)) {
                parent::send(203, ["message" => "O aluno não possui créditos suficientes."]);
            } else {

                $studentIsSuccessful = $studentModel->updateCredits($classData->student, ($student->credits - $time));
                $teacherIsSuccessful = $teacherModel->updateCredits($classData->teacher, ($teacher->credits + $time));

                $class->save();
                $classIsSuccessful = parent::isSuccessful($class);

                if ($studentIsSuccessful["success"] && $classIsSuccessful["success"] && $teacherIsSuccessful["success"]) {
                    parent::send(200, $studentIsSuccessful);
                } else {
                    parent::send(500, $classIsSuccessful);
                }
            }
        }

        public function getAll(array $data): void
        {
            $classes = (new ClassModel())->getAll($data["date"]);

            if ($classes && !empty($classes)) {
                parent::send(200, $classes);
            } else {
                parent::send(204, []);
            }
        }

        public function get(array $data): void
        {
            $model = new ClassModel();
            
            if ($data["type"] == 2) {
                $classes = $model->findTeacherClasses($data["username"], $data["date"]);
            } else if ($data["type"] == 3) {
                $classes = $model->findStudentClasses($data["username"], $data["date"]);
            }

            if ($classes && !empty($classes)) {
                parent::send(200, $classes);
            } else {
                parent::send(204, []);
            }
        }

        public function updateStatus($data): void
        {
            $model = new ClassModel();
            $isSuccessful = $model->updateStatus($data["id"], $data["status"]);

            if ($isSuccessful["success"]) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }

        public function createComment(): void
        {
            $commentData = json_decode(file_get_contents('php://input'));
            $model = new ClassModel();

            $isSuccessful = $model->createComments($commentData);

            if ($isSuccessful['success']) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }
    }