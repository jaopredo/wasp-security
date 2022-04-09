import React from 'react';
import { Link } from 'react-router-dom';

import "./Option.scss";

function Option({ src, legend, ...rest }) {
    return (
        <Link to='/wasp-security/services'>
            <figure {...rest}>
                <img className='option-image' src={src} alt={legend} />
                <figcaption>{legend}</figcaption>
            </figure>
        </Link>
    );
}

export default Option;