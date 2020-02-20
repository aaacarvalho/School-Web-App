import React from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import SubjectSelect from '../../components/SubjectSelect';
import Button from '../../components/Button';
import List from '../../components/List';

const Teachers = () => {

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Professores' />
            <WhiteCard>
                <h2>Cadastrar Professor</h2>
                <form>
                    <InputContainer>
                        Nome
                        <input type='text' placeholder='Nome' />
                    </InputContainer>
                    <InputContainer>
                        Sobrenome
                        <input type='text' placeholder ='Sobrenome' />
                    </InputContainer>
                    <SubjectSelect />
                    <Button text='Cadastrar' />
                </form>
            </WhiteCard>
            <WhiteCard extraClasses='extended'>
                <h2>Professores</h2>
                <List>
                    <li>Nome</li>
                    <li>Sobrenome</li>
                    <li>Disciplina</li>
                    <li className='short'>Editar</li>
                    <li className='short'>Excluir</li>
                </List>
                <List>
                    <li>Nome 1</li>
                    <li>Sobrenome 1</li>
                    <li>Matemática</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li>Nome 2</li>
                    <li>Sobrenome 2</li>
                    <li>Português</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li>Nome 3</li>
                    <li>Sobrenome 3</li>
                    <li>Física</li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
            </WhiteCard>
        </section>
    );
};

export default Teachers;