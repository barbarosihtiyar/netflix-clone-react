import React from 'react'
import netflixLogo from '../images/netflix.png';
import userLogo from '../images/userLogo.png';
import '../sass/header.css';


function Header() {
  return (
    <div className='headerContainer'>
        <div className="headerWrapper">
        <div className="logo-links">
            <img src={netflixLogo} alt='' />
        </div>
        <div className="search-user">
            <img src={userLogo} alt='' />
        </div>
        </div>
    </div>
  )
}

export default Header