import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.webp'

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

    return(
        <nav className='main-nav'>
            <i className="icon ion-md-menu" onClick={showMenu}></i>
            <img src={Logo} alt='Logo'/>
            <ul className='main-menu'>
                <li>
                    <Link to='/usuarios'>
                        <i className="icon ion-md-person-add"></i>Usuários
                    </Link>
                </li>
                <li>
                    <Link to='/alunos'>
                        <i className="icon ion-md-happy"></i>Alunos
                    </Link>
                </li>
                <li>
                    <Link to='/professores'>
                        <i className="icon ion-md-people"></i>Professores
                    </Link>
                </li>
                <li>
                    <Link to='/aulas'>
                        <i className="icon ion-md-calendar"></i>Aulas
                    </Link>
                </li>
                <li>
                    <Link to='/salas'>
                        <i className="icon ion-md-business"></i>Salas
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="icon ion-md-power"></i>Sair
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
