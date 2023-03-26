import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileAvatar from "../images/userFirstLogo.png";
import { MainContext, useContext } from "../context";
import "../sass/profileManagement.css"

function ProfileManagament() {
  let {setEdit} = useContext(MainContext);
  let {subsInfo,setSubsInfo} = useContext(MainContext);
  let {gameusername,setGameusername} = useContext(MainContext);

  const [gameUser,setGameUser] = useState();
  const [popup,setPopup] = useState(false)
  console.log(gameusername,"asd")

  // console.log(subsInfo)
  const changeEditVal = () => {
    setEdit(false);
    setGameusername(gameUser)
  }

  const deletedProfil = () => {
    setPopup(!popup);
    setSubsInfo({ })
  }

  // console.log(gameUser)

  const changeVis = () => {
    setPopup(!popup);
    // console.log(subsInfo)
  }

 


  const capitalizedWord = subsInfo.username.charAt(0).toUpperCase() + subsInfo.username.slice(1);

  return (
    <>
      <div className="profileManagament">
        <div className="profileManagamentContainer">
          <div className="profileManagamentWrapper">
            <h1>Edit Profile</h1>
            <div className="imageInfo">
              <div className="image">
                <img src={profileAvatar} alt="" />
              </div>
              <div className="info">
                <input type="text" name="" id="nameManagament" placeholder="Name" value={capitalizedWord} />
                <div className="language">
                  <span>Language</span>
                  <select name="" id="selectManagament">
                    <option>TR</option>
                    <option>EN</option>
                  </select>
                </div>
                <div className="createUsername">
                <h3>Game Username:</h3>
                  <span>
                    Your username is a unique name you'll use when playing games
                    with other Netflix members on Netflix Games.
                  </span>
                  <input value={gameUser} type="text" name="" id="usernameManagament" placeholder="Create in-game username" onChange={(e) => setGameUser(e.target.value)}/>
                  <span className="valError" style={{ display: "none" }}></span>
                </div>
                <div className="settingsAdult">
                  <h3>Adult Settings</h3>
                  <span id="extraSpan">All Adult Levels</span>
                  <span>Show all maturity levels in this profile</span>
                  <button>Edit</button>
                </div>
                <div className="autoplayControls">
                  <h4>Autoplay Controls</h4>
                  <div className="checkbox">
                    <input type="checkbox" name="" id="" placeholder="Create in-game username"/>
                    <label>
                      Automatically play the next episode on all devices while
                      watching a series.
                    </label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="" id="" />
                    <label>
                      Automatically play all archives with complaints while
                      browsing content.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="submitProfileManagement">
                    <Link to="/landingpage" onClick={changeEditVal()}><span>Save</span></Link>
                    <Link to="/landingpage"><span>Cancel</span></Link>
                    <a ><button onClick={changeVis} style={{background:"transparent",border:"none",color:"#fff"}}>Delete Profile</button></a>
            </div>
            <div className="popupAlerts">
              <div className="popupContainer">
                <div className="popupWrapper">
                  <div className={popup ? "popups max" : "popups mins"}>
                    <div className="headerPopup">X</div>
                    <div className="bodyPopup">Are you sure?</div>
                    <div className="footerPopup">
                      <button className="popupYes" onClick={deletedProfil}><Link style={{color:"#000",textDecoration:"none"}} to="/">YES</Link></button>
                      <button className="popupNo" onClick={changeVis}>NO</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileManagament;