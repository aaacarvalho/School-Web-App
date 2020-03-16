<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\OutcomeModel;
    use Source\models\TeacherModel;

    class OutcomeController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function create(): void
        {
            $data = json_decode(file_get_contents('php://input'));
            $outcome = new OutcomeModel();
            $teacherModel = new TeacherModel();
            $teacher = (new TeacherModel())->getTeacher($data->teacher);
            
            foreach ($data as $key => $value) {
                $outcome->$key = $value;
            }
            $outcome->teacher_username = $teacher->username;        

            $time = explode(":", $data->hours);
            $time = $time[0]*60 + $time[1]*1;

            $teacherIsSuccessful = $teacherModel->updateCredits($teacher->id, ($teacher->credits - $time));

            $outcome->save();
            $isSuccessful = parent::isSuccessful($outcome);

            if ($isSuccessful['success'] && $teacherIsSuccessful['success']) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(200, $isSuccessful);
            }
        }

        public function getAll(array $data): void
        {
            $outcomes = (new OutcomeModel())->getAll($data["from"], $data["to"]);

            if ($outcomes && !empty($outcomes)) {
                parent::send(200, $outcomes);
            } else {
                parent::send(204, []);
            }
        }

        public function getPayments(array $data): void
        {
            $payments = (new OutcomeModel())->getPayments($data["username"], $data["from"], $data["to"]);

            if ($payments && !empty($payments)) {
                parent::send(200, $payments);
            } else {
                parent::send(204, []);
            }
        }

        public function getOutcomesTotal(array $data): void
        {
            $total = (new OutcomeModel())->getOutcomesTotal($data["from"], $data["to"]);

            if ($total && !empty($total)) {
                parent::send(200, $total);
            } else {
                parent::send(204, []);
            }
        }

        public function getPaymentsTotal(array $data): void
        {
            $total = (new OutcomeModel())->getPaymentsTotal($data["username"], $data["from"], $data["to"]);

            if ($total && !empty($total)) {
                parent::send(200, $total);
            } else {
                parent::send(204, []);
            }
        }
    }