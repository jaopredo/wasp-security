import React, { useState } from 'react';

/* CSS */
import "../sass/Main.scss";

/* COMPONENTS */
import Header from '../areas/Header';
import Main from '../areas/Main';
import Footer from '../areas/Footer';

/* IMAGES */
import Search from '../images/search-icon.png';
import Game from '../images/game-icon.png';
import Block from '../images/block-icon.png';

function MainPage() {
    const [titleProgress, setTitleProgress] = useState(0);
    const servicesOptions = [
        {
            src: Search,
            legend: 'Consultoria',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quis corporis quos quam officiis magni, non iure vitae tempore facilis a expedita eos ipsum eum, ratione vel minima tenetur explicabo!',
        },
        {
            src: Game,
            legend: 'Tratamento',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quis corporis quos quam officiis magni, non iure vitae tempore facilis a expedita eos ipsum eum, ratione vel minima tenetur explicabo!',
        },
        {
            src: Block,
            legend: 'Prevenção',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui quis corporis quos quam officiis magni, non iure vitae tempore facilis a expedita eos ipsum eum, ratione vel minima tenetur explicabo!',
        },
    ];

    return (
        <>
            <Header titleProgress={titleProgress} haveMenu />
            <Main
                setProgress={setTitleProgress}
                servicesOptions={servicesOptions}
            />
            <Footer />
        </>
    );
}

export default MainPage;