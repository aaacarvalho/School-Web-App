import React, { useState } from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import List from '../../components/List';
import Api from '../../services/api';

const Users = () => {
    const [userData, setUserData] = useState({first_name: '', last_name: '', type: 0, username: '', password: ''});

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

    const validateFields = () => {
        let status = true;

        Object.keys(userData).map( i => {
            if (userData[i] === "")
                status = false;
        });

        return status;
    }

    const addUser = () => {
        
        if (validateFields()) {
            const body = JSON.stringify(userData);
            const res = Api.post('/users', body);

            console.log(res);   
        } else {
            console.log('invalido');
        }
    }

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Usuários' />
            <WhiteCard>
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
                <Button text='Enviar' Action={addUser}/>
            </WhiteCard>
            <WhiteCard extraClasses='extended'>
                <h2>Todos Usuários</h2>
                <List>
                    <li className='long'>Nome</li>
                    <li>Usuário</li>
                    <li>Tipo</li>
                    <li className='short'>Editar</li>
                    <li className='short'>Excluir</li>
                </List>
                <List>
                    <li className='long'>Aluno 1</li>
                    <li>aluno.1</li>
                    <li>Aluno</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li className='long'>Professor 1</li>
                    <li>professor.1</li>
                    <li>Professor</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li className='long'>Administrador 1</li>
                    <li>Administrador.1</li>
                    <li>Administrador</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li className='long'>Professor 2</li>
                    <li>professor.2</li>
                    <li>Professor</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li className='long'>Professor 3</li>
                    <li>professor.3</li>
                    <li>Professor</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li className='long'>Aluno 2</li>
                    <li>Aluno.1</li>
                    <li>Aluno</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
            </WhiteCard>
        </section>
    );
};

export default Users;