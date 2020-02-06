import React from 'react';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div className='page'>
            <WhiteCard>
                <h2>Acesse sua Conta</h2>
                <form className='login__form'>
                    <InputContainer>
                        <i className="icon ion-md-person"></i>
                        Usuário
                        <input type='text' placeholder='Usuário'/>
                    </InputContainer>
                    <InputContainer>
                        <i className="icon ion-md-key"></i>
                        Senha
                        <input type='password' placeholder='Senha'/>
                    </InputContainer>
                    <InputContainer>
                        <Link to='/app'>
                            <Button text='Enviar' Action={null}/>
                        </Link>
                    </InputContainer>
                </form>
            </WhiteCard>
        </div>
    );
};

export default Login;