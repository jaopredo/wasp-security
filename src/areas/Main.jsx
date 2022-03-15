import React from 'react';
import { Parallax } from 'react-scroll-parallax';

/* IMAGES */
import Wasp from '../images/wasp.png';

import Search from '../images/search-icon.png';
import Game from '../images/game-icon.png';
import Block from '../images/block-icon.png';

/* COMPONENTS */
import Option from '../components/Option';

function Main() {
    const servicesOptions = [
        {src: Search, legend: 'Consultoria'},
        {src: Game, legend: 'Tratamento'},
        {src: Block, legend: 'Prevenção'},
    ];


    return (
        <main className='content-container'>
            <section id='intro'>
                <h1>WASP</h1>
                <button type='button'>Find out more</button>
            </section>
            <section id='content'>
                <article id='generic-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat minus quis magnam mollitia dignissimos rerum quod ex cumque ipsam repellat quibusdam, assumenda alias nemo quasi quam, ab, odit aliquid.</p>
                    <img src={Wasp} alt="Vespa" />
                </article>
                <article className='services-container'>
                    <ul className='services-list generic-list'>
                        {React.Children.toArray(servicesOptions.map(
                            imagem => <Option {...imagem} />
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}

export default Main;