import React from 'react';
import List from './List';
import WhiteCard from './WhiteCard';
import Api from '../services/api';

const ClassesList = props => {

    const updateStatus = async (e, id) => {
        const select = e.target;
        await Api.get(`/classes/${id}/${select.value}`);

        if (select.value === '0') {
            select.parentNode.classList.remove('confirmed')
            select.parentNode.classList.add('reserved')
        } else {
            select.parentNode.classList.remove('reserved')
            select.parentNode.classList.add('confirmed')
        }
    }

    const renderStatusSelect = (status, id) => {
        let select;

        if (status === '0') {
            select = <select onChange={e => updateStatus(e, id)}>
                <option value='0'>Reservada</option>
                <option value='1'>Confirmada</option>
            </select>
        } else if (status === '1') {
            select = <select onChange={e => updateStatus(e, id)}>
                <option value='1'>Confirmada</option>
                <option value='0'>Reservada</option>
            </select>
        }

        return select
    }

    const renderClasses = classroom => {
        if (props.classes.length) {
            const classes = props.classes.filter(e => e.classroom === classroom);

            if (classes.length) {
                let content = classes.map(e => {
                    const student = props.students.find(student => student.id === e.student)
                    const teacher = props.teachers.find(teacher => teacher.id === e.teacher)
                    const subject = props.subjects.find(subject => subject.id === e.subject)
                    
                    return (
                            <List key={e.id}>
                                <li>{student.first_name} {student.last_name}</li>
                                <li>{teacher.first_name} {teacher.last_name}</li>
                                <li>{subject.name}</li>
                                <li>{e.time}</li>
                                <li>{e.duration}</li>
                                <li className={e.status === '0' ? 'reserved' : 'confirmed'}>
                                    {
                                        renderStatusSelect(e.status, e.id)
                                    }  
                                </li>
                            </List>
                    );
                })

                return content
            }
        }
    }

    const renderClassrooms = () => {
        if (props.classrooms.length) {
            let listOfClassrooms;

            listOfClassrooms =  props.classrooms.map(classroom => {
                return(
                    <WhiteCard key={classroom.id} extraClasses='full-page'>
                        <h2>{classroom.name}</h2>
                        <List extraClasses='header'>
                            <li>Aluno</li>
                            <li>Professor</li>
                            <li>Disciplina</li>
                            <li>Horário</li>
                            <li>Duração</li>
                            <li>Status</li>
                        </List>
                        {
                            renderClasses(classroom.id)
                        }
                    </WhiteCard>
                )
            })

            return listOfClassrooms
        } else {
            return (
                <WhiteCard extraClasses='full-page'>
                    <h2>Salas</h2>
                    <p>Não existem salas de aula cadastradas no momento.</p>
                </WhiteCard>
            )
        }   
    }

    return(
        <>
            {
                renderClassrooms()
            }
        </>
    )
};

export default ClassesList;
