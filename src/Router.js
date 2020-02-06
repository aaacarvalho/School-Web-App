import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/app" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
