import React, { useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ImMenu } from 'react-icons/im';
import { Link } from 'react-router-dom';

/* IMAGES */
import Logo from '../images/logo.png';

/* CSS */
import '../sass/Header.scss';

function Header({ titleProgress, haveMenu }) {
    /**
     *  Tag que guarda a área do cabeçalho do site.
     *  
     *  @param {Object} titleProgress Armazena o valor da opacidade do título
     */
    const titleRef = useRef();  // Ref do título
    const menuRef = useRef();  // Ref do menu

    const onIconClick = (e) => {
        const { current } = menuRef;
        if (current.style.display === "flex") {
            current.style.display = "none";
        } else {
            current.style.display = "flex";
        }
    }

    return (
        <header className='main-header'>
            <div className="logo-container">
                <img id='logo' src={Logo} alt="Logo" />
                <Parallax className='title-aligner' onProgressChange={progress => {
                    titleRef.current.style.opacity = titleProgress;
                    // Coloco a opacidade do titulo como o progresso do main (0 à 1)
                }}>
                    <Link to={'/wasp-security'}><h1 ref={titleRef}>WASP</h1></Link>
                </Parallax>
            </div>
            {haveMenu && <nav>
                <ul className='menu-list generic-list' ref={menuRef}>
                    <li className='menu-option'><a href="#intro">Home</a></li>
                    <li className='menu-option'><a href="#services">Services</a></li>
                    <li className='menu-option'><a href="#contact">Support</a></li>
                </ul>
                <div className='menu-icon-container'>
                    <ImMenu id='menu-icon' onClick={onIconClick}/>
                </div>
            </nav>}
        </header>
    );
}

export default Header;