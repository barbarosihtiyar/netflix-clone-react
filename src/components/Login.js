import React from 'react'
import netflixLogo from "../images/netflix.png";
import "../sass/login.css"
import {loginImageBg} from "../images/loginImageBg.jpg"
import {Link} from "react-router-dom"
 
function Login() {
  return (
    <section className="login">
    <div className="loginContainer" >
      <div className="loginWrapper">
        <div className="loginHeader">
          <img src={netflixLogo} alt="" />
        </div>
        <div className="login">
          <h6>Login</h6>
          <form>
          <input type="text" placeholder='email or phone number' />
          <input type="password" placeholder='password' />
          <Link to="/home"><button type='button'>Login</button></Link>
          </form>
          <div className="info">
          <div className="rememberMe">
          <div className="checkRemember">
            <input type="checkbox" id='rememberMe' />
            <label htmlFor='remembersMe'>Remember Me</label>
          </div>
            <div className="rememberSpan">
            <span>Could you help?</span>
            </div>
          </div>
          </div>
          <div className="invite">
            Could you join Netflix?<span className="special">Register now.</span>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Login