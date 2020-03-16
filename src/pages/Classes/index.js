import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import InputContainer from '../../components/InputContainer';
import WhiteCard from '../../components/WhiteCard';
import SubjectSelect from '../../components/SubjectSelect';
import TeacherSelect from '../../components/TeacherSelect';
import ClassroomSelect from '../../components/ClassroomSelect';
import Button from '../../components/Button';
import PageTitle from '../../components/PageTitle';
import StudentSelect from '../../components/StudentSelect';
import validateFields from '../../functions/validateFields';
import ClassesList from '../../components/ClassesList';
import Api from '../../services/api';
import Message from '../../functions/Message';
import Loading from '../../components/Loading';

const Dashboard = () => {

    /*
        Getting api data 
    */

    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [classrooms, setClassrooms] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const firstClassData = {
            student: '',
            subject: '',
            teacher: '',
            classroom: '',
            status: 1,
            schedule: '',
            time: '',
            duration: ''
        }

        const getStudents = async () => {
            let res = await Api.get('/students');
            setStudents(res.data);
            if (res.data.length) {
                firstClassData.student = parseInt(res.data[0].id)
                setClassData(firstClassData)   
            }
        };

        const getTeachers = async () => {
            let res = await Api.get('/teachers');
            setTeachers(res.data);
            if (res.data.length) {
                firstClassData.teacher = parseInt(res.data[0].id)
                setClassData(firstClassData)
            }
        };

        const getClassrooms = async () => {
            let res = await Api.get('/classrooms');
            setClassrooms(res.data);
            if (res.data.length) {
                firstClassData.classroom = parseInt(res.data[0].id)
                setClassData(firstClassData)
            }
        };

        const getSubjects = async () => {
            let res = await Api.get('/subjects');
            setSubjects(res.data);
            if (res.data.length) {
                firstClassData.subject = parseInt(res.data[0].id)
                setClassData(firstClassData)
            }
        };

        getStudents();
        getTeachers();
        getClassrooms();
        getSubjects();
        
    }, []);

    const [currentDate, setCurrentDate] = useState('')
    const [classes, setClasses] = useState([]);
    const selectedDateHandler = e => setCurrentDate(e.target.value)

    const getClasses = async () => {
        let res = await Api.get(`/classes/${currentDate}`);
        setClasses(res.data);
    }

    /*
        Input handlers
    */

    const [classData, setClassData] = useState({
        student: '',
        subject: '',
        teacher: '',
        classroom: '',
        status: 1,
        schedule: '',
        time: '',
        duration: ''
    });

    const studentHandler = e => {
        const { id } = students.find(el => `${el.first_name} ${el.last_name}` === e.target.value);
        setClassData({ ...classData, student: parseInt(id) });
    }

    const subjectHandler = e => {
        setClassData({ ...classData, subject: parseInt(e.target.value) });
    }

    const teacherHandler = e => {
        const { id } = teachers.find(el => el.id === e.target.value);
        setClassData({ ...classData, teacher: parseInt(id) });
    }

    const classroomHandler = e => {
        const { id } = classrooms.find(el => el.name === e.target.value);
        setClassData({ ...classData, classroom: parseInt(id) });
    }

    const scheduleHandler = e => {
        setClassData({ ...classData, schedule: e.target.value })
    }

    const timeHandler = e => {
        setClassData({ ...classData, time: e.target.value })
    }

    const statusHandler = e =>{
        setClassData({...classData, status: parseInt(e.target.value)})
    }

    const durationHandler = e => {
        setClassData({...classData, duration: e.target.value})
    }

    const saveClass = async () => {
        setMessage(<Loading />)
        
        if (validateFields(classData)) {
            const body = JSON.stringify(classData)
            
            try{
                const res = await Api.post('/classes', body)
                
                if (res.status === 200) {
                    setMessage(Message('success'))
                } else if (res.status === 203) {
                    setMessage(Message('warning', 'O aluno não possui créditos suficientes.'))
                }
            } catch {
                setMessage(Message('error'))
            }

        } else {
            setMessage(Message('warning'))
        }
    }

    /*
        Save Classroom
    */

    const [classroom, setClassroom] = useState({name: ''})
    const [newClassroomMessage, setNewClassroomMessage] = useState('')

    const newClassroomHandler = e => setClassroom({name: e.target.value})

    const saveClassroom = async () => {

        setNewClassroomMessage(<Loading />)

        if (classroom.name !== '') {
            try {
                const body = JSON.stringify(classroom)
                await Api.post('/classrooms', body)
            
                setNewClassroomMessage(Message('success'))
            } catch {
                setNewClassroomMessage(Message('error'))
            }
        } else {
            setNewClassroomMessage(Message('warning', 'Preencha os campos necessários!'))
        }
    }

    return (
        <section className='page'>
            <Menu />
            <PageTitle title='Aulas' />
            <WhiteCard>
                <InputContainer>
                    Data
                    <input type='date' onChange={e => selectedDateHandler(e)} />
                </InputContainer>
                <Button Action={getClasses} text='Ver aulas'/>
            </WhiteCard>
            <ClassesList
                classes={classes}
                classrooms={classrooms}
                students={students}
                teachers={teachers}
                subjects={subjects}
            />
            <WhiteCard>
                <h2>Nova aula</h2>
                <StudentSelect students={students} change={e => studentHandler(e)} />
                <SubjectSelect subjects={subjects} change={e => subjectHandler(e)} />
                <TeacherSelect teachers={teachers} change={e => teacherHandler(e)} />
                <ClassroomSelect classrooms={classrooms} change={e => classroomHandler(e)} />
                <InputContainer>
                    Status
                    <select onChange={(e => statusHandler(e))}>
                        <option value="1">Confirmado</option>
                        <option value="0">Reservado</option>
                    </select>
                </InputContainer>
                <InputContainer>
                    Data
                    <input type='date' onChange={e => scheduleHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Hora
                    <input type='time' onChange={e => timeHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Duração
                    <input type='time' onChange={e => durationHandler(e)} />
                </InputContainer>
                {
                    message
                }
                <Button text="Enviar" Action={saveClass} />
            </WhiteCard>
            <WhiteCard>
                <h2>Cadastrar Sala</h2>
                <InputContainer>
                    Sala
                    <input type='text' placeholder='Sala' onChange={e => newClassroomHandler(e)}/>
                </InputContainer>
                {
                    newClassroomMessage
                }
                <Button text='Cadastrar' Action={saveClassroom}/>
            </WhiteCard>
        </section>
    );
};

export default Dashboard;
