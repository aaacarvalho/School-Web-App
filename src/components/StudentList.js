import React from 'react';
import List from './List';
import WhiteCard from './WhiteCard';
import minutesToTime from '../functions/minutesToTime';

const StudentList = props => {

    const renderStudents = () => {
        let students

        if (props.students.length) {
            students = props.students.map(el => {

                return (
                    <List key={el.id}>
                        <li className='long'>{el.first_name}</li>
                        <li className='long'>{el.last_name}</li>
                        <li className='long'>{el.email}</li>
                        <li>{el.cellphone}</li>
                        <li>{minutesToTime(el.credits)}</li>
                    </List>
                )
            })
        }

        return students
    }

    return(
        <>
            <WhiteCard extraClasses='full-page'>
                <h2>Alunos</h2>
                <List extraClasses='header'>
                    <li className='long'>Nome</li>
                    <li className='long'>Sobrenome</li>
                    <li className='long'>Email</li>
                    <li>Celular</li>
                    <li>Créditos</li>
                </List>
                {
                    renderStudents()
                }
            </WhiteCard>
        </>
    );
};

export default StudentList;
