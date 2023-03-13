import React from 'react'
import userFirstLogo from "../images/userFirstLogo.png"
import userSecondLogo from "../images/userSecondLogo.png"
import userChild from "../images/userChild.png"
import "../sass/landinPage.css"
import { MainContext, useContext } from "../context";


function LandingPage() {
    let {subsInfo} = useContext(MainContext);
  return (
   <>
   <div className="landingPage">
    <div className="landingPageContainer">
        <div className="landingPageWrapper">
        <div className="userLogo">
        <h6 className='landingPageTitle'>Who is watching?</h6>
        <div className="userLogos">
        <div className="userLogoFirst usersLogo">
        <img src={userFirstLogo} alt="" />
        <span>{subsInfo.username}</span>
        </div>
        <div className="userLogoSecond usersLogo">
        <img src={userSecondLogo} alt="" />
        <span>Username</span>
        </div>
        <div className="userLogoThird usersLogo">
        <img src={userChild} alt="" />
        <span>Username</span>
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default LandingPage