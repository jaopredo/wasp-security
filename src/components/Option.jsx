import React from 'react';

// import { Container } from './styles';

function Option({ src, legend }) {
    return (
        <li className='service-option'>
            <figure>
                <img src={src} alt={legend} />
                <figcaption>{legend}</figcaption>
            </figure>
        </li>
    );
}

export default Option ;