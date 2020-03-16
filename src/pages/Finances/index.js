import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import WhiteCard from '../../components/WhiteCard'
import InputContainer from '../../components/InputContainer'
import StudentSelect from '../../components/StudentSelect'
import Button from '../../components/Button'
import Api from '../../services/api'
import Loading from '../../components/Loading'
import Message from '../../functions/Message'
import validateFields from '../../functions/validateFields'
import List from '../../components/List'
import TeacherSelect from '../../components/TeacherSelect'
import formatDate from '../../functions/formatDate'

const Finances = () => {

    /*
        Incomes and outcomes date handlers
    */

   const [from, setFrom] = useState('')
   const [to, setTo] = useState('')

    /*
        Retrieve Api Data
    */

    const [students, setStudents] = useState([])
    const [teachers, setTeachers] = useState([])
    const [incomes, setIncomes] = useState([])
    const [outcomes, setOutcomes] = useState([])
    const [totalIncomes, setTotalIncomes] = useState(0)
    const [totalOutcomes, setTotalOutcomes] = useState(0)

    const getIncomes = async () => {
        const { data } = await Api.get(`/incomes/${from === '' ? 0 : from}/${to === '' ? 0 : to}`)
        setIncomes(data)
    }

    const getOutcomes = async () => {
        const { data } = await Api.get(`/outcomes/${from === '' ? 0 : from}/${to === '' ? 0 : to}`)
        setOutcomes(data)
    }

    const getTotalIncomes = async () => {
        const { data } = await Api.get(`/incomes/total/${from === '' ? 0 : from}/${to === '' ? 0 : to}`)
        setTotalIncomes(data.total)
    }

    const getTotalOutcomes = async () => {
        const { data } = await Api.get(`/outcomes/total/${from === '' ? 0 : from}/${to === '' ? 0 : to}`)
        setTotalOutcomes(data.total)
    }

    useEffect(() => {
        const getStudents = async () => {
            const res = await Api.get('/students')
            if (res.data) {
                setStudents(res.data)
                if (res.data.length)
                    setPaymentData({ ...paymentData, student: parseInt(res.data[0].id) })
            }
        }

        const getTeachers = async () => {
            const { data } = await Api.get('/teachers')
            if (data) {
                setTeachers(data)
                setOutcome({...outcome, teacher: parseInt(data[0].id)})
            }
        }

        getStudents()
        getTeachers()
        getIncomes()
        getOutcomes()
        getTotalIncomes()
        getTotalOutcomes()
    }, [])

    /*
        Render
    */

    const renderIncomes = () => {
        let listOfIncomes = ''

        if (incomes && incomes.length) {
            listOfIncomes = incomes.map(i => {
                let method

                if (parseInt(i.method) === 1) {
                    method = 'Dinheiro'
                } else if (parseInt(i.method) === 2) {
                    method = 'Cheque'
                } else if (parseInt(i.method) === 3) {
                    method = 'Transferência'
                }
                
                return (
                    <List key={i.id}>
                        <li>{i.id}</li>
                        <li>{i.first_name} {i.last_name}</li>
                        <li>{i.responsible}</li>
                        <li>{formatDate(i.income_date)}</li>
                        <li>{method}</li>
                        <li>{`R$ ${i.amount.replace('.', ',')}`}</li>
                        <li>{parseInt(i.status) === 1 ? 'Pago' : 'Pendente'}</li>
                    </List>
                )
            })
        }

        return listOfIncomes
    }

    const renderOutcomes = () => {
        let listOfOutcomes = ''

        if (outcomes && outcomes.length) {
            listOfOutcomes = outcomes.map(i => {

                return (
                    <List key={i.id}>
                        <li>{i.id}</li>
                        <li>{i.first_name} {i.last_name}</li>
                        <li>{i.hours}</li>
                        <li>{formatDate(i.payment_date)}</li>
                        <li>{`R$ ${i.amount.replace('.', ',')}`}</li>
                    </List>
                )
            })
        }

        return listOfOutcomes
    }

    /*
        Create new payment
    */

    const [paymentMessage, setPaymentMessage] = useState('')
    const [paymentData, setPaymentData] = useState({
        student: '',
        responsible: '',
        income_date: '',
        method: 1,
        amount: '',
        status: 1
    })

    const studentHandler = e => setPaymentData({ ...paymentData, student: parseInt(e.target.value) })
    const responsibleHandler = e => setPaymentData({ ...paymentData, responsible: e.target.value })
    const incomeDateHandler = e => setPaymentData({ ...paymentData, income_date: e.target.value })
    const methodHandler = e => setPaymentData({ ...paymentData, method: parseInt(e.target.value) })
    const amountHandler = e => setPaymentData({ ...paymentData, amount: parseFloat(e.target.value) })
    const statusHandler = e => setPaymentData({ ...paymentData, status: parseInt(e.target.value) })

    const addPayment = async () => {
        setPaymentMessage(<Loading />)

        if (validateFields(paymentData)) {
            try {
                const body = JSON.stringify(paymentData)
                await Api.post('/incomes', body)

                setPaymentMessage(Message('success'))
            } catch {
                setPaymentMessage(Message('error'))
            }
        } else {
            setPaymentMessage(Message('warning'))
        }
    }

    /*
        Pay teacher
    */

    const [outcomeMessage, setOutcomeMessage] = useState('')
    const [outcome, setOutcome] = useState({
        teacher: '',
        hours: '',
        payment_date: '',
        amount: 0
    })

    const paidTeacherHandler = e => setOutcome({...outcome, teacher: parseInt(e.target.value)})
    const paidHoursHandler = e => setOutcome({...outcome, hours: e.target.value})
    const paymentDateHandler = e => setOutcome({...outcome, payment_date: e.target.value})
    const paidAmountHandler = e => setOutcome({...outcome, amount: parseFloat(e.target.value)})

    const payTeacher = async () => {
        setOutcomeMessage(<Loading />)

        if (validateFields(outcome)) {
            try {
                const body = JSON.stringify(outcome)
                await Api.post('/outcomes', body)

                setOutcomeMessage(Message('success'))
            } catch {
                setOutcomeMessage(Message('error'))
            }
        } else {
            setOutcomeMessage(Message('warning'))
        }
    }

    return (
        <section className='page'>
            <Menu />
            <PageTitle title='Financeiro' />
            <WhiteCard extraClasses='full-page flex'>
                <InputContainer>
                    Selecione uma data de início
                    <input type='date' onChange={e => setFrom(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    Selecione uma data final
                    <input type='date' onChange={e => setTo(e.target.value)} />
                </InputContainer>
                <Button text='Ver Pagamentos' Action={() => {getIncomes(); getOutcomes(); getTotalIncomes(); getTotalOutcomes()}} />
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <InputContainer>
                    <p>Total de entradas: {`R$ ${totalIncomes ? totalIncomes.replace('.', ',') : '0,00'}`}</p>
                </InputContainer>
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <h2>Entradas</h2>
                <List extraClasses='header'>
                    <li>Id</li>
                    <li>Aluno</li>
                    <li>Responsável</li>
                    <li>Data</li>
                    <li>Método</li>
                    <li>Valor</li>
                    <li>Status</li>
                </List>
                {
                    renderIncomes()
                }
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <InputContainer>
                    <p>Total de saídas: {`R$ ${ totalOutcomes ? totalOutcomes.replace('.', ',') : '0,00'}`}</p>
                </InputContainer>
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <h2>Saídas</h2>
                <List extraClasses='header'>
                    <li>Id</li>
                    <li>Professor</li>
                    <li>Horas Pagas</li>
                    <li>Data do Pagamento</li>
                    <li>Valor</li>
                </List>
                {
                    renderOutcomes()
                }
            </WhiteCard>
            <WhiteCard>
                <h2>Adicionar entrada</h2>
                <StudentSelect students={students} change={e => studentHandler(e)} />
                <InputContainer>
                    Responsável
                    <input type='text' placeholder='Responsável' onChange={e => responsibleHandler(e)}/>
                </InputContainer>
                <InputContainer>
                    Data
                    <input type='date' onChange={e => incomeDateHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Forma de pagamento
                    <select onChange={e => methodHandler(e)}>
                        <option value='1'>Dinheiro</option>
                        <option value='2'>Cheque</option>
                        <option value='3'>Transferência</option>
                    </select>
                </InputContainer>
                <InputContainer>
                    Valor
                    <input type='number' placeholder='Valor' step='0.01' onChange={e => amountHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Status
                    <select onChange={e => statusHandler(e)}>
                        <option value='1'>Pago</option>
                        <option value='2'>Pendente</option>
                    </select>
                </InputContainer>
                {
                    paymentMessage
                }
                <Button Action={addPayment} text='Adicionar' />
            </WhiteCard>
            <WhiteCard>
                <h2>Adicionar saída</h2>
                <TeacherSelect teachers={teachers} change={e => paidTeacherHandler(e)} />
                <InputContainer>
                    Horas a pagar
                    <input type='time' onChange={e => paidHoursHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Data do pagamento
                    <input type='date' onChange={e => paymentDateHandler(e)} />
                </InputContainer>
                <InputContainer>
                    Valor
                    <input type='number' step='0.01' onChange={e => paidAmountHandler(e)} />
                </InputContainer>
                {
                    outcomeMessage
                }
                <Button Action={payTeacher} text='Pagar'/>
            </WhiteCard>
        </section>
    )
};

export default Finances;
