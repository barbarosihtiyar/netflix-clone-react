import React from "react";
import netflixLogo from "../images/netflix.png";
import userLogo from "../images/userLogo.png";
import "../sass/header.css";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header({ change, setChange }) {
  const [bg, setBg] = useState(false);
  const [check, setCheck] = useState(false);

  const searchOnClick = () => {
    setCheck(!check);
  };

  const changevalueonScrool = () => {
    const scrollvalue = document.documentElement.scrollTop;
    if (scrollvalue > 20) {
      setBg(true);
    } else if (scrollvalue < 20) {
      setBg(false);
    }
  };

  window.addEventListener("scroll", changevalueonScrool);
  return (
    <div className={bg ? "headerContainer black" : "headerContainer"}>
      <div className="headerWrapper">
        <div className="logo-links">
          <Link to="/">
            <img src={netflixLogo} alt="" />
          </Link>
          <div className="links">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                Movies
                <ul>
                  {" "}
                  <Link to={"/action"}>
                    <li>Action Movies</li>
                  </Link>
                  <Link to={"/comedy"}>
                    <li>Comedy Movies</li>
                  </Link>
                  <Link to={"/horror"}>
                    <li>Horror Movies</li>
                  </Link>
                  <Link to={"/romance"}>
                    <li>Romance Movies</li>
                  </Link>
                  <Link to={"/documentary"}>
                    <li>Documentaries</li>
                  </Link>
                </ul>
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
              <BiSearchAlt2 className={check ? "buttonSearch" : ""} />
            </button>
            <input
              onChange={(e) => setChange(e.target.value)}
              type="search"
              className={check ? "inputSearch inputSearchOpen" : "inputSearch"}
              placeholder="content, person, genre"
            />
          </div>
          <div className="avatar-avatarOptions">
            <img src={userLogo} alt="" />
            <BiCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
