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
      <p className="click">Cliquez sur les images pour voir les détails</p>
    </header>
  );
};

export default Header;
