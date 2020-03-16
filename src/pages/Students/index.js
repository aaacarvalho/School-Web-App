import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import WhiteCard from '../../components/WhiteCard';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import StudentSelect from '../../components/StudentSelect';
import StudentList from '../../components/StudentList';
import validateFields from '../../functions/validateFields';
import Api from '../../services/api';
import Message from '../../functions/Message';
import Loading from '../../components/Loading';

const Students = () => {

    /*
        Register new student
    */

    const [newUserMessage, setNewUserMessage] = useState('');
    const [student, setStudent] = useState({
        first_name: '',
        last_name: '',
        email: '',
        cellphone: '',
        username: '',
        password: ''
    });

    const firstNameHandler = e => setStudent({ ...student, first_name: e.target.value });
    const lastNameHandler = e => setStudent({ ...student, last_name: e.target.value });
    const emailHandler = e => setStudent({ ...student, email: e.target.value });
    const cellphoneHandler = e => setStudent({ ...student, cellphone: e.target.value });
    const userHandler = e => setStudent({ ...student, username: e.target.value });
    const passwordHandler = e => setStudent({ ...student, password: e.target.value });

    const saveStudent = async () => {

        setNewUserMessage(<Loading />)

        if (validateFields(student)) {
            const body = JSON.stringify(student);
            
            try {
                const res = await Api.post('/students', body)

                if (res.status === 200) {
                    setNewUserMessage(Message('success'))
                } else if (res.status === 203) {
                    setNewUserMessage(Message('warning', 'O nome de usuário já existe!'))
                }
            } catch {
                setNewUserMessage(Message('error'))
            }            
        } else {
            setNewUserMessage(Message('warning'))
        }
    }

    /*
        List users in select input
    */

    const [students, setStudents] = useState([]);
    const [activeStudent, setActiveStudent] = useState(0);
    const [credits, setCredits] = useState('00:00');
    const [addCreditsMessage, setAddCreditsMessage] = useState('');

    useEffect(() => {
        const getStudents = async () => {
            let res = await Api.get('/students');
            setStudents(res.data);
            
            if (res.data.length)
                setActiveStudent(res.data[0].id);
        };

        getStudents();
    }, []);

    const changeStudent = e => {
        const name = e.target.value;
        const currentStudent = students.find(el => `${el.first_name} ${el.last_name}` === name);
        const id = parseInt(currentStudent.id);
        
        setActiveStudent(id);
    }

    const creditsHandler = e => setCredits(e.target.value)

    const addCredits = async () => {
        setAddCreditsMessage(<Loading />)
        
        const data = {
            id: activeStudent,
            credits
        };

        if (validateFields(data)) {
            const body = JSON.stringify(data);
        
            try {
                await Api.post('/students/credits', body)
                setAddCreditsMessage(Message('success'))
            } catch {
                setAddCreditsMessage(Message('error'))
            }
        } else {
            setAddCreditsMessage(Message('warning'))
        }                
    }


    return (
        <section className='page'>
            <Menu />
            <PageTitle title='Alunos' />
            <StudentList students={students} />
            <WhiteCard>
                <h2>Cadastrar Aluno</h2>
                <div>
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
                    <InputContainer>
                        Usuário
                        <input type='text' placeholder='Usuário' onChange={e => userHandler(e)} />
                    </InputContainer>
                    <InputContainer>
                        Senha
                        <input type='password' placeholder='Senha' onChange={e => passwordHandler(e)} />
                    </InputContainer>
                    {
                        newUserMessage
                    }
                    <Button text='Cadastrar' Action={saveStudent} />
                </div>
            </WhiteCard>
            <WhiteCard>
                <h2>Creditar Aluno</h2>
                <div>
                    <StudentSelect students={students} change={changeStudent} />
                    <InputContainer>
                        Créditos
                        <input type='time' value={credits} placeholder='Créditos' min='0' onChange={e => creditsHandler(e)}/>
                    </InputContainer>
                    {
                        addCreditsMessage
                    }
                    <Button text='Creditar' Action={addCredits}/>
                </div>
            </WhiteCard>
        </section>
    );
};

export default Students;
