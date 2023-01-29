import React from 'react'
import netflixLogo from '../images/netflix.png';
import userLogo from '../images/userLogo.png';
import '../sass/header.css';
import { useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";



function Header() {
  const [bg,setBg] = useState(false);
  const [check,setCheck] = useState(false);
  const [avatar,setAvatar] = useState(false);

  const searchOnClick = () => {
      setCheck(!check);
  }

  const changeAvatar = () => {
    setAvatar(!avatar);
  }

  const changevalueonScrool = () => {
      const scrollvalue = document.documentElement.scrollTop;
        if(scrollvalue > 20){
          setBg(true);
        }else if(scrollvalue < 20){
          setBg(false);
        }
    }
  
    window.addEventListener("scroll",changevalueonScrool);
  return (
    <div className={bg ? "headerContainer black" : "headerContainer"}>
        <div className="headerWrapper">
        <div className="logo-links">
            <img src={netflixLogo} alt='' />
            <div className="links">
              <ul>
                <li style={{fontWeight:700}}>Homepage</li>
                <li>Series</li>
                <li>Movies</li>
                <li>New Populars</li>
              </ul>
            </div>
        </div>
        <div  className="search-user">
        <div className={check ? "buttonInput buttonInputOpen black" : "buttonInput"}>
        <button onClick={searchOnClick} type="search" >
            <BiSearchAlt2 className={check ? "buttonSearch" : ""}/>
          </button>
          <input type="search" className={check ? "inputSearch inputSearchOpen" : "inputSearch"} placeholder='content, person, genre'/>
        </div>
          <div className="avatar-avatarOptions">
          <img src={userLogo} alt='' />
          <BiCaretDown />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Header