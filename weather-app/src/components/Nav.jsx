import React from 'react';
import Logo from '../img/logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logo" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>
      
        <SearchBar
          onSearch={onSearch}
        />
        
        <Link to='/about'>
        <span className='about-me'>About me</span>
      </Link>
       
    </nav>
  );
};

export default Nav;
