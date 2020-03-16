import React, { useState } from 'react';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import Logo from '../../assets/img/logo.webp';
import Api from '../../services/api';
import validateFields from '../../functions/validateFields';
import Loading from '../../components/Loading';
import Message from '../../functions/Message';
import History from '../../components/History';
import BaseUrl from '../../components/BaseUrl';

const Login = () => {

    const [userData, setUserData] = useState({user: '', password: ''});
    const [message, setMessage] = useState('');

    const userHandler = e => {
        setUserData({user: e.target.value, password: userData.password});
    }

    const passwordHandler = e => {
        setUserData({user: userData.user, password: e.target.value});
    };

    const sendUserData = async () => {
        const body = JSON.stringify(userData);
                
        if (validateFields(userData)) {
            setMessage(<Loading />)

            try {
                const res = await Api.post('/login', body);
                if (res.data.user.length) {
                    const user = res.data.user[0]
                    window.localStorage.setItem('user-id', user.id)
                    window.localStorage.setItem('user-name', `${user.first_name} ${user.last_name}`)
                    window.localStorage.setItem('user-type', user.type)
                    window.localStorage.setItem('user-username', user.username)
                    History.push(BaseUrl.dashboard)
                } else {
                    setMessage(Message('warning', 'O usuário ou senha informados não estão corretos'))
                }
            } catch {
                setMessage(Message('error'))
            }
        } else {
            setMessage(Message('warning'))
        }
    };

    return(
        <div className='page login'>
            <WhiteCard>
                <img src={Logo} alt='Logo'/>
                <h2>Acesse sua Conta</h2>
                <form className='login__form'>
                    <InputContainer>
                        <i className="icon ion-md-person"></i>
                        Usuário
                        <input type='text' placeholder='Usuário' value={userData.user} onChange={e => userHandler(e)}/>
                    </InputContainer>
                    <InputContainer>
                        <i className="icon ion-md-key"></i>
                        Senha
                        <input type='password' placeholder='Senha' value={userData.password} onChange={e => passwordHandler(e)} />
                    </InputContainer>
                    {
                        message
                    }
                    <Button text='Enviar' Action={sendUserData}/>
                </form>
            </WhiteCard>
        </div>
    );
};

export default Login;