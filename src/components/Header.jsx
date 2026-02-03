import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>🌬️ VayuVeda</h1>
          <span className="tagline">Clean Air, Healthy Life</span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
