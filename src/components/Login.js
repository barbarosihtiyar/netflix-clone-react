import React, { useEffect, useState } from 'react'
import netflixLogo from "../images/netflix.png";
import "../sass/login.css"
import {loginImageBg} from "../images/loginImageBg.jpg"
import {Link} from "react-router-dom"
import { MainContext, useContext } from "../context";

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checkPassword,setCheckPassword] = useState(true);
  const [checkEmail,setCheckEmail] = useState(true);
  const [register,setRegister] = useState();
  const [link,setLink] = useState();
  let {subsInfo} = useContext(MainContext);
  console.log(subsInfo);

  const checkRegister = () => {
   if( subsInfo.email === email && subsInfo.password === password){
    setRegister(true);
   }else{
    setRegister(false);
   }
  }


if(register === false){
  if(subsInfo.password !== password){
    inputPass.classList.add("borderAlert");
  }else{
    inputPass.classList.remove("borderAlert");
  }
   if(subsInfo.email !== email){
    inputEmail.classList.add("borderAlert");
  }else{
    inputEmail.classList.remove("borderAlert");
  }
}

 const checkEmailVal = () => {
  if(subsInfo.email !== email){
    checkRegister();
    setCheckEmail(false);
  }else{
    checkRegister();
    setCheckEmail(true);
 }
}

const checkPasswordVal = () => {
  if(subsInfo.password !== password){
    checkRegister();
    setCheckPassword(false);
  }else{
    checkRegister();
    setCheckPassword(true);
 }
}

const formSubmit = (e) => {
  e.preventDefault();
  checkEmailVal();
  checkPasswordVal();
  checkRegister();
}

const inputEmail = document.getElementById("userEmail");
const inputPass  = document.getElementById("userPass");

if(register === false){
  if(subsInfo.password !== password){
    inputPass.classList.add("borderAlert");
  }else{
    inputPass.classList.remove("borderAlert");
  }
   if(subsInfo.email !== email){
    inputEmail.classList.add("borderAlert");
  }else{
    inputEmail.classList.remove("borderAlert");
  }
}






  return (
    <section className="sectionLogin">
    <div className="loginContainer" >
      <div className="loginWrapper">
        <div className="loginHeader">
          <img src={netflixLogo} alt="" />
        </div>
        <div className="login">
          <h6>Login</h6>
          <form onSubmit={formSubmit}>
          <input id='userEmail' type="text" value={email} placeholder='email or phone number' onChange={(e) => setEmail(e.target.value)} />
          <input id='userPass'  value={password} type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
          <button type= {register ? "submit" : "button"} onClick={checkRegister} ><Link style={{textDecoration:"none",color:"#fff"}} to={register ? "/home" : "/" }>Login</Link></button>
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
            Could you join Netflix? <Link to="/register"><span className="special">Register now.</span></Link>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Login