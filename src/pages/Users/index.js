import React, { useState } from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import UsersList from '../../components/UsersList';
import Api from '../../services/api';
import validateFields from '../../functions/validateFields';
import Loading from '../../components/Loading';
import Message from '../../functions/Message';

const Users = () => {
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState({
        first_name: '', 
        last_name: '', 
        type: 0, 
        username: '', 
        password: ''
    });

    const nameHandler = e => {
        setUserData({...userData, first_name: e.target.value});
    };

    const lastNameHandler = e => {
        setUserData({...userData, last_name: e.target.value});
    };

    const typeHandler = e => {
        setUserData({...userData, type: parseInt(e.target.value)});
    };

    const userNameHandler = e => {
        setUserData({...userData, username: e.target.value});
    };

    const passwordHandler = e => {
        setUserData({...userData, password: e.target.value});
    };

    const saveUser = async () => {
        
        setMessage(<Loading />);
        let displayMessage;

        if (validateFields(userData)) {
            const body = JSON.stringify(userData);
            
            try{
                await Api.post('/users', body);

                displayMessage = Message('success');
                setMessage(displayMessage);
            } catch {
                displayMessage = Message('error');
                setMessage(displayMessage);
            }

        } else {
            displayMessage = Message('warning');
            setMessage(displayMessage);
        }
    }

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Usuários' />
            <WhiteCard extraClasses='full-page'>
                <h2>Todos Usuários</h2>
                <UsersList />
            </WhiteCard>
            <WhiteCard>
                <h2>Cadastrar Usuário</h2>
                <InputContainer>
                    Nome
                    <input type='text' placeholder='Nome' onChange={e => nameHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Sobrenome
                    <input type='text' placeholder='Sobrenome' onChange={e => lastNameHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Tipo de usuário
                    <select onChange={e => typeHandler(e)}>
                        <option value="0">Administrador</option>
                        <option value="1">Usuário</option>
                    </select>
                </InputContainer>
                <InputContainer>
                    Usuário
                    <input type='text' placeholder='Usuário' onChange={e => userNameHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Senha
                    <input type='password' placeholder='Senha' onChange={e => passwordHandler(e)} />
                </InputContainer>
                {
                    message
                }
                <Button text='Enviar' Action={saveUser}/>
            </WhiteCard>
        </section>
    );
};

export default Users;