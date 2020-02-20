import React from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import List from '../../components/List';

const Classrooms = () => {

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Salas de aula' />
            <WhiteCard>
                <h2>Cadastrar Sala</h2>
                <form>
                    <InputContainer>
                        Sala
                        <input type='text' placeholder='Sala' />
                    </InputContainer>
                    <Button text='Enviar' />
                </form>
            </WhiteCard>
            <WhiteCard extraClasses='extended'>
                <h2>Salas</h2>
                <List>
                    <li className='long'>Sala</li>
                    <li>Status</li>
                    <li className='short'>Editar</li>
                    <li className='short'>Excluir</li>
                </List>
                <List>
                    <li className='long'>Sala 1</li>
                    <li>
                        <select>
                            <option>Ativa</option>
                            <option>Inativa</option>
                        </select>
                    </li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
                <List>
                    <li className='long'>Sala 2</li>
                    <li>
                        <select>
                            <option>Ativa</option>
                            <option>Inativa</option>
                        </select>
                    </li>
                    <li className='short'><i className="icon ion-md-build"></i></li>
                    <li className='short'><i className="icon ion-md-trash"></i></li>
                </List>
            </WhiteCard>
        </section>
    );
};

export default Classrooms;