import React  from 'react';
import { Redirect } from 'react-router-dom';
import BaseUrl from '../components/BaseUrl';

const Logout = () => {
    window.localStorage.clear()

    return <Redirect to={BaseUrl.home} />
};

export default Logout;
