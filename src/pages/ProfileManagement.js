import React from "react";
import profileAvatar from "../images/userFirstLogo.png";
// import { MainContext, useContext } from "../context";
import "../sass/profileManagement.css"

function ProfileManagament() {


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
                <input type="text" name="" id="nameManagament" placeholder="Name" />
                <div className="language">
                  <span>Language</span>
                  <select name="" id="selectManagament">
                    <option>TR</option>
                    <option>EN</option>
                  </select>
                </div>
                <div className="createUsername">
                <h3>Game Username</h3>
                  <span>
                    Your username is a unique name you'll use when playing games
                    with other Netflix members on Netflix Games.
                  </span>
                  <input type="text" name="" id="usernameManagament" />
                  <span className="valError" style={{ display: "none" }}></span>
                </div>
                <div className="settingsAdult">
                  <h3>Adult Settings</h3>
                  <span>All Adult Levels</span>
                  <span>Show all maturity levels in this profile</span>
                  <button>Edit</button>
                </div>
                <div className="autoplayControls">
                  <h4>Autoplay Controls</h4>
                  <div className="checkbox">
                    <input type="checkbox" name="" id="" />
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
                    <span>Save</span>
                    <span>Cancel</span>
                  </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileManagament;