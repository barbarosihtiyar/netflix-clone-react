import React, { useState } from 'react'
import userFirstLogo from "../images/userFirstLogo.png"
import userSecondLogo from "../images/userSecondLogo.png"
import userChild from "../images/userChild.png"
import "../sass/landinPage.css"
import { MainContext, useContext } from "../context";
import { FiEdit2 } from "react-icons/fi"
import { Link } from 'react-router-dom'


function LandingPage() {
  let {edit,setEdit} = useContext(MainContext);
  const [which,setWhich] = useState(true);
  
    console.log(edit)
 
    let {subsInfo} = useContext(MainContext);

    const capitalizedWord = subsInfo.username.charAt(0).toUpperCase() + subsInfo.username.slice(1);

    const changeWhich = () => {
      setWhich(!which);
    }

  return (
   <>
   <div className="landingPage">
    <div className="landingPageContainer">
        <div className="landingPageWrapper">
        <div className="userLogo">
        <h6 className='landingPageTitle'>Who is watching?</h6>
        <div className="userLogos">
        <div className="userLogoFirst usersLogo">
        <div className="" style={{margin:"auto"}}>
        {edit ? <img className={edit ? " downOpacity" : ""} src={userFirstLogo} alt="" /> : <Link to="/home"><img className={edit ? " downOpacity" : ""} src={userFirstLogo} alt="" /></Link>}
        { edit ? <Link className='editSvg' to="/profilemanagement"><FiEdit2 /></Link> : ""}
        </div>
        <span>{capitalizedWord}</span>
       <span id='titleProfileManagement1'><Link to="/profilemanagement">Profile Management</Link></span>
        </div>
        {/* <div className="userLogoSecond usersLogo">
        <img src={userSecondLogo} alt="" />
        <span>Username</span>
        </div>
        <div className="userLogoThird usersLogo">
        <img src={userChild} alt="" />
        <span>Username</span>
        </div> */}
        </div>
        </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default LandingPage