import React from 'react';
import { Parallax } from 'react-scroll-parallax';

/* CSS */
import "../sass/Main.scss";

/* IMAGES */
import Wasp from '../images/wasp.png';

/* COMPONENTS */
import Option from '../components/Option';

function Main({ setProgress, servicesOptions }) {
    return (
        <>
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
                        <p>
                            Lorem ipsum
                        </p>
                        <p>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        </p>
                        <p>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quia itaque ipsam cupiditate odit molestiae commodi veniam dignissimos quidem autem quos numquam maxime illo nesciunt et impedit in inventore quam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, ipsa deleniti!
                        </p>
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
        </>
    );
}

export default Main;