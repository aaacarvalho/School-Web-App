import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import SubjectSelect from '../../components/SubjectSelect';
import Button from '../../components/Button';
import validateFields from '../../functions/validateFields';
import Api from '../../services/api';
import TeachersList from '../../components/TeachersList';
import Loading from '../../components/Loading';
import Message from '../../functions/Message';

const Teachers = () => {

    /*
        OnLoad events
    */

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const getSubjects = async () => {
            const res = await Api.get('/subjects');
            setSubjects(res.data);
            
            if (res.data.length)
                setTeacherData({...teacherData, subject: res.data[0].id})
        }

        getSubjects();
    }, []);

    /*
        Create new teacher
    */

    const [newTeacherMessage, setNewTeacherMessage] = useState('');
    const [newSubjectMessage, setNewSubjectMessage] = useState('');
    const [teacherData, setTeacherData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        cellphone: '',
        subject: '',
        username: '',
        password: ''
    });

    const firstNameHandler = e => setTeacherData({ ...teacherData, first_name: e.target.value });
    const lastNameHandler = e => setTeacherData({ ...teacherData, last_name: e.target.value });
    const emailHandler = e => setTeacherData({ ...teacherData, email: e.target.value });
    const cellphoneHandler = e => setTeacherData({ ...teacherData, cellphone: e.target.value });
    const subjectHandler = e => setTeacherData({ ...teacherData, subject: e.target.value });
    const userHandler = e => setTeacherData({ ...teacherData, username: e.target.value });
    const passwordHandler = e => setTeacherData({ ...teacherData, password: e.target.value });

    const saveTeacher = async () => {
        setNewTeacherMessage(<Loading />)

        if (validateFields(teacherData)) {
            const body = JSON.stringify(teacherData);

            try {
                const res = await Api.post('/teachers', body);

                if (res.status === 200) {
                    setNewTeacherMessage(Message('success'))
                } else if (res.status === 203) {
                    setNewTeacherMessage(Message('warning', 'O usuário já existe!'))
                }
            } catch {
                setNewTeacherMessage(Message('error'))
            }
        } else {
            setNewTeacherMessage(Message('warning'))
        }
    }

    /*
        Create new subject
    */

    const [subject, setSubject] = useState({ name: '' });

    const saveSubject = async () => {

        setNewSubjectMessage(<Loading />)

        if (subject.name !== '') {
            const body = JSON.stringify(subject);

            try {
                await Api.post('/subjects', body);
                setNewSubjectMessage(Message('success'))
            } catch {
                setNewSubjectMessage(Message('error'))
            }

        } else {
            setNewSubjectMessage(Message('warning'))
        }
    }

    return (
        <section className='page'>
            <Menu />
            <PageTitle title='Professores' />
            <WhiteCard extraClasses='full-page'>
                <h2>Professores</h2>
                <TeachersList />
            </WhiteCard>
            <WhiteCard>
                <h2>Cadastrar Professor</h2>
                <form>
                    <InputContainer>
                        Nome
                        <input type='text' placeholder='Nome' onChange={e => firstNameHandler(e)} />
                    </InputContainer>
                    <InputContainer>
                        Sobrenome
                        <input type='text' placeholder='Sobrenome' onChange={e => lastNameHandler(e)} />
                    </InputContainer>
                    <InputContainer>
                        Email
                        <input type='email' placeholder='Email' onChange={e => emailHandler(e)} />
                    </InputContainer>
                    <InputContainer>
                        Celular
                        <input type='phone' placeholder='Celular' onChange={e => cellphoneHandler(e)} />
                    </InputContainer>
                    <SubjectSelect change={e => subjectHandler(e)} subjects={subjects} />
                    <InputContainer>
                        Usuário
                        <input type='text' placeholder='Usuário' onChange={e => userHandler(e)} />
                    </InputContainer>
                    <InputContainer>
                        Senha
                        <input type='password' placeholder='Senha' onChange={e => passwordHandler(e)} />
                    </InputContainer>
                    {
                        newTeacherMessage
                    }
                    <Button text='Cadastrar' Action={saveTeacher} />
                </form>
            </WhiteCard>
            <WhiteCard>
                <h2>Disciplinas</h2>
                <form>
                    <InputContainer>
                        Nome
                        <input type='text' placeholder='Nome' onChange={e => setSubject({ name: e.target.value })} />
                    </InputContainer>
                    {
                        newSubjectMessage
                    }
                    <Button text='Adicionar' Action={saveSubject} />
                </form>
            </WhiteCard>
        </section>
    );
};

export default Teachers;