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
    $router->get('/users', 'UserController:getAll');

    /*
        Students
    */

    $router->post('/students', 'StudentController:create');
    $router->post('/students/credits', 'StudentController:addCredit');
    $router->get('/students', 'StudentController:getAll');

    /*
        Teachers
    */

    $router->post('/teachers', 'TeacherController:create');
    $router->get('/teachers', 'TeacherController:getAll');

    /*
        Subjects
    */

    $router->post('/subjects', 'SubjectController:create');
    $router->get('/subjects', 'SubjectController:getAll');

    /*
        Classrooms
    */

    $router->post('/classrooms', 'ClassroomController:create');
    $router->get('/classrooms', 'ClassroomController:getAll');

    /*
        Classes
    */

    $router->post('/classes', 'ClassController:create');
    $router->get('/classes/{date}', 'ClassController:getAll');
    $router->get('/classes/{type}/{username}/{date}', 'ClassController:get');
    $router->get('/classes/{id}/{status}', 'ClassController:updateStatus');
    $router->post('/classes/comments', 'ClassController:createComment');

    /*
        Incomes
    */

    $router->post('/incomes', 'IncomeController:create');
    $router->get('/incomes/{from}/{to}', 'IncomeController:getAll');
    $router->get('/incomes/total/{from}/{to}', 'IncomeController:getTotal');
    

    /*
        Outcomes
    */

    $router->post('/outcomes', 'OutcomeController:create');
    $router->get('/outcomes/{from}/{to}', 'OutcomeController:getAll');
    $router->get('/outcomes/total/{from}/{to}', 'OutcomeController:getOutcomesTotal');
    $router->get('/payments/{username}/{from}/{to}', 'OutcomeController:getPayments');
    $router->get('/payments/total/{username}/{from}/{to}', 'OutcomeController:getPaymentsTotal');

    /* 
        Dispatch
    */

    $router->dispatch();

    if($router->error()){
        echo $router->error();
    }