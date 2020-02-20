import React from 'react';
import Menu from '../../components/Menu';
import InputContainer from '../../components/InputContainer';
import WhiteCard from '../../components/WhiteCard';
import SubjectSelect from '../../components/SubjectSelect';
import TeacherSelect from '../../components/TeacherSelect';
import ClassroomSelect from '../../components/ClassroomSelect';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';

const Dashboard = () => {

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Aulas'/>
            <WhiteCard>
                <h2>Nova aula</h2>
                <SubjectSelect />
                <TeacherSelect />
                <ClassroomSelect />
                <InputContainer>
                    Data
                    <input type='date'/>
                </InputContainer>
                <Button text="Enviar" />
            </WhiteCard>
            <WhiteCard>
                <h2>Aulas Marcadas</h2>
                <SubjectSelect />
                <TeacherSelect />
                <ClassroomSelect />
                <InputContainer>
                    Data
                    <input type='date'/>
                </InputContainer>
                <Button text="Enviar" />
            </WhiteCard>
        </section>
    );
};

export default Dashboard;
