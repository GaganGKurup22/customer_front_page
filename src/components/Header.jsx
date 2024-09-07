import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="left-section">
        <h1 className="logo">
          <span className="logo-og">OG</span>
          <span className="logo-kisan">KISAN</span>
        </h1>
      </div>
      <div className="profile-icon">
        <img src="Component 34.jpg" alt="User Profile" />
      </div>
    </header>
  );
}

export default Header;
