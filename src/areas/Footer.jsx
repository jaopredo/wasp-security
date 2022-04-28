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
            <p><a href={mailLink} target="_blank"><MdEmail/> wasp.sec.contato@gmail.com</a></p>
            <p><a href="https://www.instagram.com/wasp.sec/" target="_blank"><AiFillInstagram/> @wasp.sec</a></p>
        </footer>
    );
}

export default Footer;