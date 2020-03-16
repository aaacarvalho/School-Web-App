<?php

    namespace Source\controllers;
    use Source\controllers\Controller;
    use Source\models\IncomeModel;

    class IncomeController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function create(): void
        {
            $data = json_decode(file_get_contents('php://input'));
            $income = new IncomeModel();
            
            foreach ($data as $key => $value) {
                $income->$key = $value;
            }

            $income->save();
            $isSuccessful = parent::isSuccessful($income);

            if ($isSuccessful['success']) {
                parent::send(200, $isSuccessful);
            } else {
                parent::send(500, $isSuccessful);
            }
        }

        public function getAll(array $data): void
        {
            $incomes = (new IncomeModel())->getAll($data["from"], $data["to"]);

            if ($incomes && !empty($incomes)) {
                parent::send(200, $incomes);
            } else {
                parent::send(204, []);
            }
        }

        public function getTotal(array $data): void
        {
            $total = (new IncomeModel())->getTotal($data["from"], $data["to"]);

            if ($total && !empty($total)) {
                parent::send(200, $total);
            } else {
                parent::send(204, []);
            }
        }
    }