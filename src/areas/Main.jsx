import React from 'react';
import { Parallax } from 'react-scroll-parallax';

/* IMAGES */
import Wasp from '../images/wasp.png';

/* COMPONENTS */
import Option from '../components/Option';

function Main({ setProgress, servicesOptions }) {
    return (
        <main className='content-container'>
            <section id='intro'>
                <div className='text-container'>
                    <h1>WASP</h1>
                    <button type='button'>Find out more</button>
                </div>
                <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="200" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>
            </section>
            <Parallax onProgressChange={progress => setProgress(progress)}></Parallax>
            <section id='content'>
                <article id='generic-text'>
                    <div className='content-text-container'>
                        <p>Sobre nós</p>
                        <p>Trabalhamos com o objetivo de oferecer aos nossos clientes o melhor e mais eficiente sistema de proteção.</p>
                        <p>Tendo em vista, que, uma empresa verdadeiramente comprometida com seus serviços precisa proteger as suas próprias informações e os dados dos seus funcionários.</p>
                    </div>
                    <img src={Wasp} alt="Vespa" />
                </article>
                <article id='services' className='services-container'>
                    <ul className='services-list generic-list'>
                        {React.Children.toArray(servicesOptions.map(
                            imagem => <li className='service-option'><Option {...imagem} className="option" /></li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}

export default Main;