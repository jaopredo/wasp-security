import React from 'react';

/* COMPONENTS */
import Option from './Option';

function Service({text, ...rest}) {

    return (
        <div className='service'>
            <p>{text}</p>
            <Option {...rest} />
        </div>
    );
}

export default Service;