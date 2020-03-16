import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MyClasses from '../pages/MyClasses';
import Users from '../pages/Users';
import BaseUrl from '../components/BaseUrl';

const PrivateRoute = props => {
    const isLogged = !!window.localStorage.getItem('user-id')

    if (isLogged) {
        const userType = parseInt(window.localStorage.getItem('user-type'))
        const level = parseInt(props.level)

        if (props.path === BaseUrl.dashboard) {
            if (userType > 1) {
                return <Route {...props} component={MyClasses}/>
            } else {
                return <Route {...props} component={Users} />
            }
        } else {
            if (props.type === 'lower') {
                if (userType <= level) {
                    return <Route {...props} />
                } else {
                    return <Redirect to={BaseUrl.dashboard} />
                }
            } else if (props.type === 'greater') {
                if (userType >= level) {
                    return <Route {...props} />
                } else {
                    return <Redirect to={BaseUrl.dashboard} />
                }
            }
        }
    } else {
        return <Redirect to={BaseUrl.home} />
    }
};

export default PrivateRoute;
