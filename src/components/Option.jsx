import React from 'react';
import { Link } from 'react-router-dom';

import "./Option.scss";

function Option({ src, legend, style, tStyle, ...rest }) {
    return (
        <Link to="/wasp-security/services">
            <figure style={style} {...rest}>
                <img className='option-image' src={src} alt={legend} />
                <figcaption style={tStyle}>{legend}</figcaption>
            </figure>
        </Link>
    );
}

export default Option;