import React from 'react';

/* CSS */
import "../sass/Services.scss";

/* COMPONENTS */
import Header from '../areas/Header';
import Footer from '../areas/Footer';

import Service from '../components/Service';

/* IMAGES */
import Search from '../images/search-icon.png';
import Game from '../images/game-icon.png';
import Block from '../images/block-icon.png';

function Services() {
    /* Objeto contendo as informações dos elementos que vão ser criados */
    const servicesOptions = [
        {
            src: Search,
            legend: 'Security Consulting',
            id: 'security-consulting',
            text: (<>
                <p>
                    Analyse, rating and security tests.
                </p>
                <p>To set the budget, we'll follow the following parameters:</p>
                <ul style={{marginLeft: '20px'}}>
                    <li>Time to find the bugs</li>
                    <li>Bug's danger level</li>
                </ul>
                <p>We have 4 bug's levels</p>
                <table id='service-danger-table'>
                    <tbody style={{width: '100%'}}>
                        <tr><td className='leve'>Weak</td></tr>
                        <tr><td className='atention'>Danger</td></tr>
                        <tr><td className='bad'>Bad</td></tr>
                        <tr><td className='critic'>Critic</td></tr>
                    </tbody>
                </table>
            </>)
        },
        {
            src: Game,
            legend: 'Security Management',
            id: 'security-management',
            text: (
                <>
                    <p>
                        Planing actions , treatment and data recovery after attacks.
                    </p>
                    <p>
                        We'll offer services for: <strong>Recovery data after an attack</strong>,
                        treat bugs found by our <strong>Security Consulting</strong> service or even
                        that our client have found by himself!
                    </p>
                </>
            ),
        },
        {
            src: Block,
            legend: 'Security Integration',
            id: 'security-integration',
            text: (
                <>
                    <p>Preventing by instalation and personalization of properly configurations for every single case</p>
                    <p>
                        You don't know how to start to prevent your service from cyber attacks? Don't worry!
                        Our company offers an <strong>REAL-TIME</strong> service for protecting you application!
                        Our team will develope a unique security system just for you situation! 
                    </p>
                </>
            ),
        },
    ];

    /* ESTILO DO RODAPÉ */
    const footerStyle = {
        backgroundColor: "#f5f3e6",
        marginTop: "-10px",
        borderRadius: "10px",
    }

    return (
        <>
            <Header titleProgress={1} />
            <main>
                <div className='services-container-desc'>
                    <ul className='services-list-desc generic-list'>
                        {React.Children.toArray(servicesOptions.map(
                            imagem => <li>
                                <Service {...imagem} className="service-option" />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer style={footerStyle} />
        </>
    );
}

export default Services;