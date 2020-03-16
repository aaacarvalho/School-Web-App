import React, { useState, useEffect} from 'react';
import List from './List';
import Api from '../services/api';
import minutesToTime from '../functions/minutesToTime';

const TeachersList = () => {

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const getTeachersList = async () => {
            let res = await Api.get('/teachers');
            setTeachers(res.data);
        }

        getTeachersList();
    }, []);

    const renderTeachers = () => {
        let list = '';

        if (teachers.length) {
            list = teachers.map(el => {
                return(
                    <List key={el.id}>
                        <li className='long'>{el.first_name}</li>
                        <li className='long'>{el.last_name}</li>
                        <li className='long'>{el.email}</li>
                        <li>{minutesToTime(el.credits)}</li>
                        <li>{el.cellphone}</li>
                        <li>{el.subject}</li>
                    </List>
                )
            })
        }

        return list
    }

    return(
        <>
            <List extraClasses='header'>
                <li className='long'>Nome</li>
                <li className='long'>Sobrenome</li>
                <li className='long'>Email</li>
                <li>Total de Aulas</li>
                <li>Celular</li>
                <li>Disciplina</li>
            </List>
            {
               renderTeachers()
            }
        </>
    );
};

export default TeachersList;
