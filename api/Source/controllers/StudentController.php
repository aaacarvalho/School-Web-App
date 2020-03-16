<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\StudentModel;
    use Source\models\UserModel;

    class StudentController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function create(): void
        {
            $studentData = json_decode(file_get_contents('php://input'));
            $user = (new UserModel())->getUserByUsername($studentData->username);

            if ($user && !empty($user)) {
                parent::send(203, ["success" => false, "message" => "O usuário já existe"]);
            } else {
                $newUser = new UserModel();
                $student = new StudentModel();

                $student->first_name = $studentData->first_name;
                $newUser->first_name = $studentData->first_name;

                $student->last_name = $studentData->last_name;
                $newUser->last_name = $studentData->last_name;

                $newUser->type = 3;
                $newUser->username = $studentData->username;
                $newUser->password = $studentData->password;
                $id = $newUser->save();
 
                $student->username = $studentData->username;
                $student->cellphone = $studentData->cellphone;
                $student->email = $studentData->email;
                $student->credits = 0;
                $student->save();
                
                $newUserIsSuccessful = parent::isSuccessful($newUser);
                $studentIsSuccessful = parent::isSuccessful($student);

                if ($newUserIsSuccessful["success"] && $studentIsSuccessful['success']) {
                    parent::send(200, $newUserIsSuccessful);
                } else {
                    parent::send(200, $newUserIsSuccessful);
                }
            }
        }

        public function getAll(): void
        {
            $students = (new StudentModel())->getAll();

            if ($students && !empty($students)) {
                parent::send(200, $students);
            } else {
                parent::send(204, []);
            }
        }

        public function addCredit(): void
        {
            $data = json_decode(file_get_contents('php://input'));

            $credits = explode(':', $data->credits);
            $creditsInMinutes = $credits[0] * 60 + $credits[1];

            $model = new StudentModel();

            $student = $model->getStudent($data->id);
            $totalCredits = $student->credits + $creditsInMinutes;

            $status = $model->updateCredits($data->id, $totalCredits);

            if ($status['success']) {
                parent::send(200, $status);
            } else {
                parent::send(500, $status);
            }
        }
    }