<?php

    namespace Source\controllers;

    abstract class Controller
    {
		public function __construct()
		{
			header("Access-Control-Allow-Origin: *");
            header("Access-Control-Allow-Headers: *");
            header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
		}

		public static function send(int $statusCode, array $data): void
        {
        	http_response_code($statusCode);
            echo json_encode($data);
       	}

       	public static function isSuccessful(object $object): array
       	{
        	if ($object->fail()) {
            	$result["success"] = true;
            	$result["message"] = "Operação realizada com sucesso!";
          	} else {
            	$result["success"] = false;
            	$result["messsage"] = $object->fail()->getMessage();
          	}
       	}
    }