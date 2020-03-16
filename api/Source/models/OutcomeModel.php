<?php

    namespace Source\models;
    use CoffeeCode\DataLayer\Connect;
    use CoffeeCode\DataLayer\DataLayer;

    class OutcomeModel extends DataLayer
    {
        private $connection;

        public function __construct()
        {
            $this->connection = Connect::getInstance();
            parent::__construct('outcomes', ['teacher', 'hours', 'payment_date', 'amount']);
        }

        public function getAll(string $from, string $to): array
        {
            if ($from == "0" && $to == "0") {
                $date = "";
            } else if ($from != "0" && $to == "0") {
                $date = "AND o.payment_date >= '$from'"; 
            } else if ($from == "0" && $to != "0") {
                $date = "AND o.payment_date <= '$to'";
            } else if ($from == $to) {
                $date = "AND o.payment_date = '$to'";
            } else if ($from != "0" && $to != "0") {
                $date = "AND o.payment_date >= '$from' AND o.payment_date <= '$to'";
            }

            $query = "SELECT o.id, t.first_name, t.last_name, o.hours, o.payment_date, o.amount
                        FROM teachers t, outcomes o
                        WHERE o.teacher = t.id $date
                        ORDER BY o.payment_date ASC";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $outcomes = $stmt->fetchAll();
                
                return $outcomes;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }

        public function getPayments(string $username, string $from, string $to): array
        {
            if ($from == "0" && $to == "0") {
                $date = "";
            } else if ($from != "0" && $to == "0") {
                $date = "AND o.payment_date >= '$from'"; 
            } else if ($from == "0" && $to != "0") {
                $date = "AND o.payment_date <= '$to'";
            } else if ($from == $to) {
                $date = "AND o.payment_date = '$to'";
            } else if ($from != "0" && $to != "0") {
                $date = "AND o.payment_date >= '$from' AND o.payment_date <= '$to'";
            }

            $query = "SELECT o.id, t.first_name, t.last_name, o.hours, o.payment_date, o.amount
                        FROM outcomes o, teachers t
                        WHERE o.teacher = t.id AND t.username = ? $date
                        ORDER BY o.payment_date ASC";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$username]);

                $payments = $stmt->fetchAll();
                
                return $payments;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }

        public function getOutcomesTotal(string $from, string $to): object
        {
            if ($from == "0" && $to == "0") {
                $date = "";
            } else if ($from != "0" && $to == "0") {
                $date = "WHERE o.payment_date >= '$from'"; 
            } else if ($from == "0" && $to != "0") {
                $date = "WHERE o.payment_date <= '$to'";
            } else if ($from == $to) {
                $date = "WHERE o.payment_date = '$to'";
            } else if ($from != "0" && $to != "0") {
                $date = "WHERE o.payment_date >= '$from' AND o.payment_date <= '$to'";
            }

            $query = "SELECT SUM(o.amount) as total
                        FROM outcomes o
                        $date";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute();

                $total = $stmt->fetch();
                
                return $total;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }

        public function getPaymentsTotal(string $username, string $from, string $to): object
        {
            if ($from == "0" && $to == "0") {
                $date = "";
            } else if ($from != "0" && $to == "0") {
                $date = "AND o.payment_date >= '$from'"; 
            } else if ($from == "0" && $to != "0") {
                $date = "AND o.payment_date <= '$to'";
            } else if ($from == $to) {
                $date = "AND o.payment_date = '$to'";
            } else if ($from != "0" && $to != "0") {
                $date = "AND o.payment_date >= '$from' AND o.payment_date <= '$to'";
            }

            $query = "SELECT SUM(o.amount) as total
                        FROM outcomes o, teachers t
                        WHERE o.teacher = t.id AND t.username = ? $date";

            try {
                $stmt = $this->connection->prepare($query);
                $stmt->execute([$username]);

                $total = $stmt->fetch();
                
                return $total;
            } catch (PDOException $e) {
                return ["message" => $e];
            }            
        }
    }
