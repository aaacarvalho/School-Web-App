import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import PageTitle from '../../components/PageTitle';
import Api from '../../services/api';
import WhiteCard from '../../components/WhiteCard';
import List from '../../components/List';
import InputContainer from '../../components/InputContainer'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
import Message from '../../functions/Message'

const MyClasses = () => {

    /*
        Get api data
    */

    const username = window.localStorage.getItem('user-username')
    const type = parseInt(window.localStorage.getItem('user-type'))
    const [currentDate, setCurrentDate] = useState('')
    const [classes, setClasses] = useState([])

    const selectedDateHandler = e => setCurrentDate(e.target.value)

    const getClasses = async (date = currentDate) => {
        let { data } = await Api.get(`/classes/${type}/${username}/${date}`);

        if (data)
            setClasses(data);
    }

    useEffect(() => {
        getClasses(0);
    }, [])
    
    /*
        Modal
    */

    const [isModalVisible, setIsModalVisible] = useState(false)
    const [currentClass, setCurrentClass] = useState({})
    const [teacherComment, setTeacherComment] = useState('')
    const [studentComment, setStudentComment] = useState('')
    const [commentMessage, setCommentMessage] = useState('')

    useEffect(() => {
        if (currentClass.student_comments)
            setStudentComment(currentClass.student_comments)

        if (currentClass.teacher_comments)
            setTeacherComment(currentClass.teacher_comments)

    }, [currentClass])

    const sendComment = async () => {

        setCommentMessage(<Loading />)

        const body = JSON.stringify({
            type,
            id: currentClass.id,
            comment: type === 2 ? teacherComment : studentComment
        })

        try {
            const res = await Api.post(`/classes/comments`, body)
            setCommentMessage(Message('success'))
        } catch {
            setCommentMessage(Message('error'))
        }        
    } 

    const showModal = () => {
        const modalScreen = 
            <Modal>
                <WhiteCard>
                    <h2>Comentários do aluno</h2>
                        { type === 3 ?
                                <>
                                    <h3>Escreva seu comentário</h3> 
                                    <textarea defaultValue={studentComment} onChange={(e) => setStudentComment(e.target.value)}></textarea>
                                    {
                                        commentMessage
                                    }
                                    <Button text='Salvar' Action={sendComment}/> 
                                </>
                            : 
                                <p>{studentComment}</p>
                        }
                </WhiteCard>
                <WhiteCard>
                    <h2>Comentários do professor</h2>
                    { type === 2 ? 
                            <>
                                <h3>Escreva seu comentário</h3>
                                <textarea defaultValue={teacherComment} onChange={(e) => setTeacherComment(e.target.value)}></textarea> 
                                {
                                    commentMessage
                                }
                                <Button text='Salvar' Action={sendComment}/>
                            </>
                        : 
                            <p>{teacherComment}</p>
                    }
                </WhiteCard>
                <Button Action={() => setIsModalVisible(false)} text='Fechar' />
            </Modal>

        if (currentClass) {
            return modalScreen
        } else {
            return false
        }
    }

    const commentsHandler = (isVisible, id) => {
        setCurrentClass(classes.find(c => c.id === id))
        setIsModalVisible(isVisible)
    }


    /*
        Render
    */

    const renderClasses = () => {
        let result;

        if (classes.length) {
            result = classes.map(el => {
                const date = new Date(el.schedule)

                return(
                    <List key={el.id}>
                        <li>{el.first_name} {el.last_name}</li>
                        <li>{el.subject}</li>
                        <li>{el.classroom_name}</li>
                        <li>{date.toLocaleDateString()}</li>
                        <li>{el.time}</li>
                        <li>{el.duration}</li>
                        <li><p onClick={() => commentsHandler(true, el.id)} style={{color: '#2ca17e'}}>Ver</p></li>
                        <li className={el.status !== '0' ? 'confirmed' : 'reserved'}>{el.status !== '0' ? 'Confirmado' : 'Reservado'}</li>
                    </List>
                )
            })
        } else {
            result = <p className='no-data'>Não foram encontrados registros para essa pesquisa</p>
        }

        return result
    }

    return(
        <section className='page'>
            <Menu />
            <PageTitle title='Minhas aulas' />
            <WhiteCard>
                <InputContainer>
                    Escolha uma data
                    <input type='date' onChange={e => selectedDateHandler(e)} />
                </InputContainer>
                <Button Action={getClasses} text='Ver aulas'/>
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <h2>Aulas</h2>
                <List extraClasses='header'>
                    <li>{ type === 2 ? 'Aluno' : 'Professor'}</li>
                    <li>Disciplina</li>
                    <li>Sala</li>
                    <li>Data</li>
                    <li>Hora</li>
                    <li>Duração</li>
                    <li>Comentários</li>
                    <li>Status</li>
                </List>
                {
                    renderClasses()
                }
            </WhiteCard>
            {
                isModalVisible && showModal()
            }
        </section>
    )
};

export default MyClasses;
