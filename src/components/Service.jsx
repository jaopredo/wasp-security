import React from 'react';

import './Service.scss';

function Service({text, src, legend, ...rest}) {
    return (
        <>
            <div className='text-container'>{text}</div>
            <figure {...rest}>
                <img className='service-option-image' src={src} alt={legend} />
                <figcaption>{legend}</figcaption>
            </figure>
        </>
    );
}

export default Service;