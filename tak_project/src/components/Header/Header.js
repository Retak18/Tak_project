import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>
        Tak Project <br />
        <span className='subtitle'>[ Portfolio Gallery ]</span>
      </h1>
      <p>Bienvenue dans ma galerie de portfolio. Ici, vous pourrez voir mes projets, le développement et les détails d'organisation.</p>
      <div className="social">
      <a  href="mailto:tarek_lamarti@live.fr">
        <img className="mail" src="\mail_l.png" alt="Mail" />
      </a>
      <a className="link" href="https://www.linkedin.com/in/tarek-lamarti-06b041b9/" target="_blank" >
        <img src="\linkedin-icon.svg" alt="LinkedIn" />
      </a>
    </div>
      <p className="click">N'hésitez pas à cliquer sur les images ci-dessous pour voir les détails</p>
    </header>
  );
};

export default Header;
