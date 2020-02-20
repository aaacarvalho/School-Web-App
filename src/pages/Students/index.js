import React from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import StudentSelect from '../../components/StudentSelect';

const Students = () => {

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Alunos' />
            <WhiteCard>
                <h2>Cadastrar Aluno</h2>
                <form>
                    <InputContainer>
                        Nome
                        <input type='text' placeholder='Nome' />
                    </InputContainer>
                    <InputContainer>
                        Sobrenome
                        <input type='text' placeholder='Sobrenome' />
                    </InputContainer>
                    <InputContainer>
                        Email
                        <input type='email' placeholder='Email' />
                    </InputContainer>
                    <InputContainer>
                        Celular
                        <input type='phone' placeholder='Celular' />
                    </InputContainer>
                    <Button text='Cadastrar'/>
                </form>
            </WhiteCard>
            <WhiteCard>
                <h2>Creditar Aluno</h2>
                <form>
                    <StudentSelect />
                    <InputContainer>
                        Créditos
                        <input type='number' placeholder='Créditos' min='0' />
                    </InputContainer>
                    <Button text='Creditar' />
                </form>
            </WhiteCard>
        </section>
    );
};

export default Students;
