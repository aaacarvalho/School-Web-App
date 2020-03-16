<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\SubjectModel;

    class SubjectController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }
    
        public function create(): void 
        {
            $data = json_decode(file_get_contents('php://input'));

            $subject = new SubjectModel();
            $subject->name = $data->name;
            $subject->save();

            $isSuccessful = parent::isSuccessful($subject);

            if ($isSuccessful['success']) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }

        public function getAll(): void
        {
            $subjects = (new SubjectModel())->getAll();

            if ($subjects && !empty($subjects)) {
                parent::send(200, $subjects);
            } else {
                parent::send(204, []);
            }
        }
    }