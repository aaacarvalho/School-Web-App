import React, { useState, useEffect } from 'react';
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import Api from '../../services/api'
import WhiteCard from '../../components/WhiteCard';
import List from '../../components/List';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import formatDate from '../../functions/formatDate'

const TeacherFinances = () => {

    const [payments, setPayments] = useState([])
    const [total, setTotal] = useState(0)

    /*
        Incomes and outcomes date handlers
    */

    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const username = window.localStorage.getItem('user-username')

    const getPayments = async () => {
        const { data } = await Api.get(`/payments/${username}/${from === '' ? 0 : from}/${to === '' ? 0 : to}`)
        setPayments(data)
    }

    const getPaymentsTotal = async () => {
        const { data } = await Api.get(`/payments/total/${username}/${from === '' ? 0 : from}/${to === '' ? 0 : to}`)
        setTotal(data.total)
    }

    useEffect(() => {
        getPayments()
        getPaymentsTotal()
    }, [])

    const renderPayments = () => {
        let listOfPayments = ''

        if (payments && payments.length) {
            listOfPayments = payments.map(p => {

                return (
                    <List key={p.id}>
                        <li>{p.id}</li>
                        <li>{p.first_name} {p.last_name}</li>
                        <li>{p.hours}</li>
                        <li>{formatDate(p.payment_date)}</li>
                        <li>{`R$ ${p.amount.replace('.', ',')}`}</li>
                    </List>
                )
            })
        }

        return listOfPayments
    }

    return (
        <section className='page'>
            <Menu />
            <PageTitle title='Finanças' />
            <WhiteCard extraClasses='full-page flex'>
                <InputContainer>
                    Selecione uma data de início
                    <input type='date' onChange={e => setFrom(e.target.value)} />
                </InputContainer>
                <InputContainer>
                    Selecione uma data final
                    <input type='date' onChange={e => setTo(e.target.value)} />
                </InputContainer>
                <Button text='Ver Pagamentos' Action={() => { getPayments(); getPaymentsTotal()}} />
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <InputContainer>
                    <p>Valor Total Recebido: R$ {total ? total.replace('.', ',') : '0,00'}</p>
                </InputContainer>
            </WhiteCard>
            <WhiteCard extraClasses='full-page'>
                <h2>Pagamentos Recebidos</h2>
                <List extraClasses='header'>
                    <li>Id</li>
                    <li>Professor</li>
                    <li>Horas pagas</li>
                    <li>Data do pagamento</li>
                    <li>Valor Recebido</li>
                </List>
                {
                    renderPayments()
                }
            </WhiteCard>
        </section>
    )
};

export default TeacherFinances;
