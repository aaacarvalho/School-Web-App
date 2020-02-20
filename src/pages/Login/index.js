import React, { useState } from 'react';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import Logo from '../../assets/img/logo.webp';
import Api from '../../services/api';

const Login = () => {

    const [userData, setUserData] = useState({user: '', password: ''});

    const userHandler = e => {
        setUserData({user: e.target.value, password: userData.password});
    }

    const passwordHandler = e => {
        setUserData({user: userData.user, password: e.target.value});
    };

    const sendUserData = async () => {
        const body = JSON.stringify(userData);
        const res = await Api.post('/login', body);
        
        console.log(res);
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
                    <Button text='Enviar' Action={sendUserData}/>
                </form>
            </WhiteCard>
        </div>
    );
};

export default Login;