import React from 'react';

/* COMPONENTS */
import Option from '../components/Option';

function Service({text, ...rest}) {

    return (
        <>
            <div className='text-container'>{text}</div>
            <Option {...rest} />
        </>
    );
}

export default Service;