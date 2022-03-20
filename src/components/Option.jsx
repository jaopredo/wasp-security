import React from 'react';

import "./Option.scss";

function Option({ src, legend }) {
    return (
        <figure className='option'>
            <img className='option-image' src={src} alt={legend} />
            <figcaption>{legend}</figcaption>
        </figure>
    );
}

export default Option ;