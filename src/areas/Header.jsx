import React from 'react';

/* IMAGES */
import Logo from '../images/logo.png';

/* CSS */
import '../sass/Header.scss';

function Header() {
    return (
        <header className='main-header'>
            <img id='logo' src={Logo} alt="Logo" />
            <nav>
                <ul className='menu-list generic-list'>
                    <li className='menu-option'><a href="#intro">Home</a></li>
                    <li className='menu-option'><a href="#services">Services</a></li>
                    <li className='menu-option'><a href="#contact">Support</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;