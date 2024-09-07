
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">
          <span className="logo-og">OG</span> 
          <span className="logo-kisan">KISAN</span>
        </h1>
        <div className="profile-icon">
          <img src="/path_to_profile_icon" alt="User Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;