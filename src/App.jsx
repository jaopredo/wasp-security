import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

/* AREAS */
import Header from './areas/Header';
import Main from './areas/Main';
import Footer from './areas/Footer';
import Services from './areas/Services';

/* IMAGES */
import Search from './images/search-icon.png';
import Game from './images/game-icon.png';
import Block from './images/block-icon.png';

function App() {
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
            <Header titleProgress={titleProgress} />
            <main className='content-container'>
                <Routes>
                    <Route path='/wasp-security' element={<Main
                        setProgress={setTitleProgress}
                        servicesOptions={servicesOptions}
                    />} />
                    <Route path='/wasp-security/services' element={<Services
                        servicesOptions={servicesOptions}
                    />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
