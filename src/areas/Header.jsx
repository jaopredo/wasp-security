import React, { useRef } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ImMenu } from 'react-icons/im';

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
        if (current.style.display === "block") {
            current.style.display = "none";
        } else {
            current.style.display = "block";
        }
    }

    return (
        <header className='main-header'>
            <div className="logo-container">
                <img id='logo' src={Logo} alt="Logo" />
                <Parallax onProgressChange={progress => {
                    titleRef.current.style.opacity = titleProgress;
                    // Coloco a opacidade do titulo como o progresso do main (0 à 1)
                }}>
                    <h1 ref={titleRef}>WASP</h1>
                </Parallax>
            </div>
            {haveMenu && <nav>
                <ul className='menu-list generic-list' ref={menuRef}>
                    <li className='menu-option'><a href="#intro">Home</a></li>
                    <li className='menu-option'><a href="#services">Services</a></li>
                    <li className='menu-option'><a href="#contact">Support</a></li>
                </ul>
                <ImMenu id='menu-icon' onClick={onIconClick}/>
            </nav>}
        </header>
    );
}

export default Header;