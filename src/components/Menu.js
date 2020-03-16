import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.webp'
import BaseUrl from '../components/BaseUrl'

const Menu = () => {

    const [isVisible, setIsVisible] = useState(false);

    const showMenu = () => {
        const classes = document.querySelector('.main-menu').classList;
        const menuButton = document.querySelector('.icon').classList;

        if (isVisible) {
            setIsVisible(false);
            if (classes.contains('isVisible')) 
                classes.remove('isVisible');

            classes.add('isNotVisible');
            menuButton.remove('ion-md-close');
            menuButton.add('ion-md-menu');

        } else {
            setIsVisible(true);

            if (classes.contains('isNotVisible'))
                classes.remove('isNotVisible');

            classes.add('isVisible');
            menuButton.remove('ion-md-menu');
            menuButton.add('ion-md-close');
        }
    }

    const renderMenu = () => {
        const isLogged = !!window.localStorage.getItem('user-id');
    
        if (isLogged) {
            const userType = parseInt(window.localStorage.getItem('user-type'));

            if (userType === 0) {
                return (
                    <>
                        <li>
                            <Link to={BaseUrl.users}>
                                <i className="icon ion-md-person-add"></i>Usuários
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.students}>
                                <i className="icon ion-md-happy"></i>Alunos
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.teachers}>
                                <i className="icon ion-md-people"></i>Professores
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.classes}>
                                <i className="icon ion-md-calendar"></i>Aulas
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.finances}>
                                <i className="icon ion-md-wallet"></i>Financeiro
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.logout}>
                                <i className="icon ion-md-power"></i>Sair
                            </Link>
                        </li>
                    </>
                )
            } else if(userType === 1) {
                return (
                    <>
                        <li>
                            <Link to={BaseUrl.users}>
                                <i className="icon ion-md-person-add"></i>Usuários
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.students}>
                                <i className="icon ion-md-happy"></i>Alunos
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.teachers}>
                                <i className="icon ion-md-people"></i>Professores
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.classes}>
                                <i className="icon ion-md-calendar"></i>Aulas
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.logout}>
                                <i className="icon ion-md-power"></i>Sair
                            </Link>
                        </li>
                    </>
                )
            } else if (userType === 2) {
                return (
                    <>
                        <li>
                            <Link to={BaseUrl.myClasses}>
                                <i className="icon ion-md-calendar"></i>Minhas Aulas
                            </Link>
                        </li>
                        <li>
                            <Link to={BaseUrl.teacherFinances}>
                                <i className="icon ion-md-wallet"></i>Financeiro
                            </Link>
                        </li>
                        <li> 
                            <Link to={BaseUrl.logout}>
                                <i className="icon ion-md-power"></i>Sair
                            </Link>
                        </li>
                    </>
                )
            } else if (userType === 3) {
                return(
                    <>
                        <li>
                            <Link to={BaseUrl.myClasses}>
                                <i className="icon ion-md-calendar"></i>Minhas Aulas
                            </Link>
                        </li>
                        <li> 
                            <Link to={BaseUrl.logout}>
                                <i className="icon ion-md-power"></i>Sair
                            </Link>
                        </li>
                    </>
                )
            }
        }
    }

    return(
        <nav className='main-nav'>
            <i className="icon ion-md-menu" onClick={showMenu}></i>
            <img src={Logo} alt='Logo'/>
            <ul className='main-menu'>
            {
                renderMenu()
            }                
            </ul>
        </nav>
    );
};

export default Menu;
