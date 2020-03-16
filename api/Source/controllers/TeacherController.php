<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\TeacherModel;
    use Source\models\UserModel;

    class TeacherController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function create(): void
        {
            $teacherData = json_decode(file_get_contents("php://input"));
            $teacher = new TeacherModel();
            $newUser = new UserModel();
            $user = (new UserModel())->getUserByUsername($teacherData->username);

            if ($user && !empty($user)) {
                parent::send(203, ["success" => false, "message" => "O usuário já existe"]);
            } else {
                $teacher->first_name = $teacherData->first_name;
                $newUser->first_name = $teacherData->first_name;
                $teacher->last_name = $teacherData->last_name;
                $newUser->last_name = $teacherData->last_name;

                $teacher->username = $teacherData->username;
                $teacher->email = $teacherData->email;
                $teacher->cellphone = $teacherData->cellphone;
                $teacher->subject = $teacherData->subject;
                $teacher->credits = "00:00";

                $newUser->type = 2;
                $newUser->username = $teacherData->username;
                $newUser->password = $teacherData->password;

                $newUser->save();
                $teacher->save();

                $teacherIsSuccessful = parent::isSuccessful($teacher);
                $newUserIsSuccessful = parent::isSuccessful($newUser);

                if ($teacherIsSuccessful["success"] && $newUserIsSuccessful["success"]) {
                    parent::send(200, $teacherIsSuccessful);
                } else {
                    parent::send(500, $teacherisSuccessful);
                }
            }
        }

        public function getAll(): void
        {
            $teachers = (new TeacherModel())->getAll();

            if ($teachers && !empty($teachers)) {
                parent::send(200, $teachers);
            } else {
                parent::send(204, []);
            }
        }
    }