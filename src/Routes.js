import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import Classes from './pages/Classes';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import MyClasses from './pages/MyClasses';
import History from './components/History';
import PrivateRoute from './components/PrivateRouter';
import Logout from './components/Logout';
import BaseUrl from './components/BaseUrl';
import Finances from './pages/Finances';
import TeacherFinances from './pages/Finances/TeacherFinances';

const Routes = () => {
    return(
        <Router history={History}>
            <Switch>
                <Route exact path={BaseUrl.home} component={Login} />
                <PrivateRoute exact path={BaseUrl.dashboard} level='0' type='greater'/>
                <PrivateRoute exact path={BaseUrl.classes} component={Classes} level='1' type='lower'/>
                <PrivateRoute exact path={BaseUrl.students} component={Students} level='1' type='lower'/>
                <PrivateRoute exact path={BaseUrl.teachers} component={Teachers} level='1' type='lower' />
                <PrivateRoute exact path={BaseUrl.users} component={Users} level='1' type='lower'/>
                <PrivateRoute exact path={BaseUrl.myClasses} component={MyClasses} level='2' type='greater'/>
                <PrivateRoute exact path={BaseUrl.finances} component={Finances} level='0' type='lower' />
                <PrivateRoute exact path={BaseUrl.teacherFinances} component={TeacherFinances} level ='3' type='lower' />
                <Route exact path={BaseUrl.logout} component={Logout} />
            </Switch>
        </Router>
    );
};

export default Routes;
