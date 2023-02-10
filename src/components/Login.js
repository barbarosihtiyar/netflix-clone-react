import React from 'react'
import netflixLogo from "../images/netflix.png";

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginHeader">
          <img src={netflixLogo} alt="" />
        </div>
        <div className="login">
          <h6>Login</h6>
          <input type="text" placeholder='email or phone number' />
          <input type="password" placeholder='password' />
          <button type='button'>Login</button>
          <div className="info">
          <div className="rememberMe">
          <span htmlFor='rememberMe'>Remember Me</span>
            <input type="checkbox" id='rememberMe' />
          </div>
          <span>Could you help?</span>
          </div>
          <div className="invite">
            <span>Could you join Netflix?</span><span className="special">Register now.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login