import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import "../sass/signup.css";
import netflixLogo from "../images/Netflix-Logo-.webp";

function Signup() {
  return (
    <main>
      <section className="signup">
      <div className="signupContainer">
        <div className="signupWrapper">
        <div className="registerHeader">
              <img src={netflixLogo} alt="" />
            </div>
        <div className="signupTitle">
          <h1>CREATE ACCOUNT</h1>
        </div>
        <div className="signupForm">
          <form>
            <label htmlFor='name'>Name and Surname</label>
            <input name='name' id='name' type="text" placeholder='Name and Surname'/>

            <label htmlFor='username'>Username</label>
            <input name='username' id='username' type="text" placeholder='Username'/>


            <label htmlFor='email'>Email Adress</label>
            <input name='email' id='email' type="text" placeholder='Email Adress'/>

            <label htmlFor='password'>Password</label>
            <input name='password' id='password' type="password" placeholder='Password'/>

            <label htmlFor='passwordAgain'>Password Again</label>
            <input name='passwordAgain' id='passwordAgain' type="password" placeholder='Password Again' />

            <label htmlFor='birthday'>Birthday</label>
            <input name='birthday' id='birthday' type="date" placeholder='Password Again' />

            <label htmlFor='gender'>Gender</label>
            <div className="malefemale">
            <div className="male">
            <input name='gender' id='male' type="radio"  />
            <label htmlFor='male'>Male</label>
            </div>
            <div className="female">
            <input name='gender' id='female' type="radio"  />
            <label htmlFor='female'>Female</label>
            </div>
            </div>


            <div className="checkbox">
              <input type="checkbox" name='condition' id='condition' />
              <label htmlFor='condition'>By ticking this box, you will be deemed to have accepted the terms of use.</label>
            </div>
            <button type='submit'>CREATE ACCOUNT</button>
          </form>
          <span>Already have an account <Link to="/">Sign In</Link></span>
        </div>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Signup