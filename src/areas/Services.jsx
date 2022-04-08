import React from 'react';
import styled from "styled-components";

import "../sass/Services.scss";

/* COMPONENTS */
import Service from '../components/Service';

function Services({ servicesOptions }) {
    return (
        <div className='services-container-desc'>
            <ul className='services-list-desc generic-list'>
                {React.Children.toArray(servicesOptions.map(
                    imagem => <li>
                        <Service {...imagem} className="service-option" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Services;