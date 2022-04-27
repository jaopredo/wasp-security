import React from 'react';
import { MdEmail, MdPhone,  } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

/* CSS */
import "../sass/Footer.scss";

function Footer({...rest}) {
    const mailLink = 'https://mail.google.com/mail/u/2/#inbox?compose=CllgCJlGTpggsJszHxvqCMMzJPJGQzMJJjVxtXmRFKllHbQtZlFmKSQshLWFVmWHfdJzCQktPDV';

    return (
        <footer {...rest} id='contact' className='footer-contact'>
            <h2>WASP CEARÁ</h2>
            <p><MdPhone/> (88) 9683-7327</p>
            <p><a href={mailLink}><MdEmail/> cybersecurity@wasp.com</a></p>
            <p><AiFillInstagram/> @wasp_cybersecurity</p>
        </footer>
    );
}

export default Footer;