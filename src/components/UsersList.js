import React, { useEffect, useState } from 'react';
import Api from '../services/api';
import List from './List';

const UsersList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            let res = await Api.get('/users');
            setUsers(res.data);
        };

        getUsers();
    }, []);

    const renderUserType = type => {
        let userType;

        switch (type){
            case '0':
                userType = 'Administrador';
            break;
            case '1':
                userType = 'Usuário';
            break;
            case '2':
                userType = 'Professor';
            break;
            case '3':
                userType = 'Aluno';
            break;
            default:
                userType = '';
            break;
        }

        return userType;
    }

    return(
        <>
            <List extraClasses='header'>
                <li className='short'>Id</li>
                <li className='long'>Nome</li>
                <li className='long'>Sobrenome</li>
                <li>Usuário</li>
                <li>Tipo</li>
            </List>
            {
                users.map(el => {
                    return(
                        <List key={el.id}>
                            <li className='short'>{el.id}</li>
                            <li className='long'>{el.first_name}</li>
                            <li className='long'>{el.last_name}</li>
                            <li>{el.username}</li>
                            <li>{ renderUserType(el.type) }</li>
                        </List>
                    );
                })
            }
        </>
    );

};

export default UsersList;
