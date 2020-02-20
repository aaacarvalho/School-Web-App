import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Classrooms from './pages/Classrooms';
import Users from './pages/Users';
import Classes from './pages/Classes';
import Students from './pages/Students';
import Teachers from './pages/Teachers';

const Router = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/aulas' component={Classes} />
                <Route exact path='/alunos' component={Students} />
                <Route exact path='/professores' component={Teachers} />
                <Route exact path='/salas' component={Classrooms} />
                <Route exact path='/usuarios' component={Users} />
            </Switch>
        </HashRouter>
    );
};

export default Router;
