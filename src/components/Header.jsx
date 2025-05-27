import React from 'react';
import '../styles/components/Header.css';

const Header = () => (
  <header className="header">
    <div className="logo"><span className='health-font'>Health</span>care<span>.</span></div>
    <input className="search-bar" placeholder="Search" disabled />
    <div className="header-icons">
      <button className="add-button">+</button>
      <img src="/assets/avatar.png" alt="User" className="avatar" />
    </div>
  </header>
);  

export default Header;