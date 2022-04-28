import React from 'react';
import { Parallax } from 'react-scroll-parallax';

/* IMAGES */
import Wasp from '../images/wasp.png';

/* COMPONENTS */
import Option from '../components/Option';

/* IMAGES */
import Search from '../images/search-icon.png';
import Game from '../images/game-icon.png';
import Block from '../images/block-icon.png';

function Main({ setProgress }) {
    const mailLink = 'https://mail.google.com/mail/u/2/#inbox?compose=CllgCJlGTpggsJszHxvqCMMzJPJGQzMJJjVxtXmRFKllHbQtZlFmKSQshLWFVmWHfdJzCQktPDV';

    const servicesOptions = [
        {
            src: Search,
            legend: 'Security Consulting',
        },
        {
            src: Game,
            legend: 'Security Management',
        },
        {
            src: Block,
            legend: 'Security Integration',
        },
    ];

    return (
        <main className='content-container'>
            <section id='intro'>
                <div className='text-container'>
                    <h1>WASP</h1>
                    <a href={mailLink} target='_blank'><button type='button'>Find out more</button></a>
                </div>
                <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="200" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>
            </section>
            <Parallax onProgressChange={progress => setProgress(progress)}></Parallax>
            <section id='content'>
                <article id='generic-text'>
                    <div className='content-text-container'>
                        <h2>About Us</h2>
                        <p>We work to offer our clients the <strong>best</strong> and the <strong>most efficient</strong> protection system</p>
                        <p>Seeing that an truly compromised company always prizes for its own informations and data of clients and employees </p>
                    </div>
                    <img src={Wasp} alt="Vespa" />
                </article>
                <article id='services' className='services-container'>
                    <ul className='services-list generic-list'>
                        {React.Children.toArray(servicesOptions.map(
                            imagem => <li>
                                <Option {...imagem} className="option" />
                            </li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}

export default Main;