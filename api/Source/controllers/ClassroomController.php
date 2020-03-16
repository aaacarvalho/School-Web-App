<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\ClassroomModel;

    class ClassroomController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }
    
        public function create(): void 
        {
            $data = json_decode(file_get_contents('php://input'));

            $classroom = new ClassroomModel();
            $classroom->name = $data->name;
        
            $classroom->save();
            $isSuccessful = parent::isSuccessful($classroom);

            if ($isSuccessful["success"]) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }

        public function getAll(): void
        {
            $classrooms = (new ClassroomModel())->getAll();

            if ($classrooms && !empty($classrooms)) {
                parent::send(200, $classrooms);
            } else {
                parent::send(204, []);
            }
        }
    }