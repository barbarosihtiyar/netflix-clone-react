import React from 'react'
import netflixLogo from "../images/netflix.png";
import "../sass/register.css"
import {loginImageBg} from "../images/loginImageBg.jpg"
import {Link} from "react-router-dom"
 
function Login() {
  return (
    <section>
    <section className='sectionRegister' >
    <div className="registerContainer" >
      <div className="registerWrapper">
        <div className="registerHeader">
          <img src={netflixLogo} alt="" />
        </div>
        <div className="register">
        <div className="registerTitle">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h6>Watch anywhere. Cancel anytime.</h6>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className="registerInput">
            <form>
              <input type="email" placeholder="Email adress"/>
              <button type='button'>Get Started</button>
            </form>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>
    <section className="info">
      
    </section>
    </section>
  )
}

export default Login