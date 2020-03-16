<?php 

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class IncomeModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('incomes', ['student', 'responsible', 'method', 'income_date', 'amount', 'status']);
        }

        public function getAll(string $from, string $to): array
        {
            if ($from == "0" && $to == "0") {
                $date = "";
            } else if ($from != "0" && $to == "0") {
                $date = "AND i.income_date >= '$from'"; 
            } else if ($from == "0" && $to != "0") {
                $date = "AND i.income_date <= '$to'";
            } else {
                $date = "AND i.income_date >= '$from' AND i.income_date <= '$to'";
            }

            $query = "SELECT i.id, i.responsible, s.first_name, s.last_name, i.income_date, i.method, i.amount, i.status  
            FROM students s, incomes i
            WHERE i.student = s.id $date
            ORDER BY i.income_date ASC";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $incomes = $stmt->fetchAll();
                
                return $incomes;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }

        public function getTotal(string $from, string $to): object
        {
            if ($from == "0" && $to == "0") {
                $date = "";
            } else if ($from != "0" && $to == "0") {
                $date = "AND income_date >= '$from'"; 
            } else if ($from == "0" && $to != "0") {
                $date = "AND income_date <= '$to'";
            } else if ($from == $to) {
                $date = "AND income_date = '$to'";
            } else {
                $date = "AND income_date >= '$from' AND income_date <= '$to'";
            }

            $query = "SELECT SUM(amount) as total FROM incomes WHERE status = 1 $date ORDER BY income_date ASC";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $total = $stmt->fetch();
                
                return $total;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }
    }
