<?php

    require __DIR__ . '/vendor/autoload.php';

    use CoffeeCode\Router\Router;

    $router = new Router(ROOT);

    /*
        Controllers
    */

    $router->namespace('Source\controllers');

    /*
        Login
    */

    $router->post('/login', 'LoginController:login');

    /*
        Users
    */

    $router->post('/users', 'UserController:create');

    /* 
        Dispatch
    */

    $router->dispatch();

    if($router->error()){
        echo $router->error();
    }