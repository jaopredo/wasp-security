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