import React from "react";
import netflixLogo from "../images/netflix.png";
import userLogo from "../images/userLogo.png";
import "../sass/header.css";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { HiPencilSquare } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import profileAvatar from "../images/profileAvatar.png"
import { MainContext, useContext } from "../context";



function Header() {
  const [bg, setBg] = useState(false);
  const [check, setCheck] = useState(false);
  let {subsInfo} = useContext(MainContext);
  let {setEdit} = useContext(MainContext);
  let {change,setChange} = useContext(MainContext);
  const [isFocused,setIsFocused] = useState(false)

  let username = (subsInfo.username).toUpperCase();
  
  const searchOnClick = () => {
    setCheck(!check);
    setIsFocused(!isFocused)
  };

  const changevalueonScrool = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 20) {
      setBg(true);
    } else if (scrollvalue < 20) {
      setBg(false);
    }
  };

  const changeEditVal = () => {
    setEdit(true)
  }

  console.log(change)

  window.addEventListener("scroll", changevalueonScrool);
  return (
    <div className={bg ? "headerContainer black" : "headerContainer"}>
      <div className="headerWrapper">
        <div className="logo-links">
          <Link to="/home">
            <img src={netflixLogo} alt="" />
          </Link>
          <div className="links">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to={"/action"}>
                    <li>Action Movies</li>
                  </Link>
                  </li>
                  <li>
                  <Link to={"/comedy"}>
                    <li>Comedy Movies</li>
                  </Link>
                  </li>
                  <li>
                  <Link to={"/horror"}>
                    <li>Horror Movies</li>
                  </Link>
                  </li>
                  <li>
                  <Link to={"/romance"}>
                    <li>Romance Movies</li>
                  </Link>
                  </li>
                  <li>
                  <Link to={"/documentary"}>
                    <li>Documentaries</li>
                  </Link>
                  </li>
            </ul>
          </div>
        </div>
        <div className="search-user">
          <div
            className={
              check ? "buttonInput buttonInputOpen black" : "buttonInput"
            }
          >
            <button onClick={searchOnClick} type="search">
              <BiSearchAlt2 className={check ? "buttonSearch button" : "button"} />
            </button>
            <input
              onChange={(e) => setChange(e.target.value.toLowerCase())}
              value={change}
              onFocus={isFocused}
              type="search"
              className={check ? "inputSearch inputSearchOpen" : "inputSearch"}
              placeholder="content, person, genre"
            />
          </div>
          <div className="avatar-avatarOptions">
            <img src={userLogo} alt="" />
            <BiCaretDown className="updown"/>
            <div className="userOptions">
            <div className="flex" style={{marginBottom:"8px"}}>
              <img src={profileAvatar} alt=""  />
              <span>{username}</span>
            </div>
              <div className="flex">
                <HiPencilSquare className="pl"/>
                <span onClick={changeEditVal}><Link to={"/landingpage"}>Profile Managament</Link></span>
              </div>
              <div className="flex">
                <MdOutlineAccountCircle className="pl"/>
                <span><Link to={"/account"}>Account</Link></span>
              </div>
              <div className="flex">
                <FiHelpCircle className="pl"/>
                <span>Help Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;