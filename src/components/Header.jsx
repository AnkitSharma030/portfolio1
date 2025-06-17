// components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="logo">Portfolio</div>
      <nav className="nav">
        <button onClick={() => scrollToSection('hero')}>Home</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
         <button onClick={() => scrollToSection('contact')}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
