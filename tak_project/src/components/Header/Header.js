import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>
        Tak Project <br />
        <span>[ Portfolio Gallery ]</span>
      </h1>
      <p>Welcome to my portfolio gallery. Here you will can see my projects. The development and the other details of the organisation. </p>
      <p className="click">Click on the images to see the details</p>
    </header>
  );
};

export default Header;
