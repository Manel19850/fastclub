import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
    </footer>
  );
}

export default Footer;
