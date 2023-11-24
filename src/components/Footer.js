import React from 'react';
import { CCircle } from 'react-bootstrap-icons';

const Footer = () => {
    return ( 
        <footer>
          <CCircle className="logo"/> Created By
            <a href="https://www.linkedin.com/in/hritesh7/" 
               target="_blank" 
               rel="noreferrer">
                  RITACE
            </a>
        </footer>
    );
}
 
export default Footer;