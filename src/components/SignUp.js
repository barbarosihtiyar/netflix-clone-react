import React from 'react'
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <main>
      <section className="signup">
        <div className="signupTitle">
          <h1>Register</h1>
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
            <input name='password' id='password' type="password" placeholder='password'/>

            <label htmlFor='passwordAgain'>Password Again</label>
            <input name='passwordAgain' id='passwordAgain' type="password" />

            <div className="checkbox">
              <input type="checkbox" name='condition' id='condition' />
              <label htmlFor='condition'>By ticking this box, you will be deemed to have accepted the terms of use.</label>
            </div>
            <button type='submit'>CREATE ACCOUNT</button>
          </form>
          <span>Already have an account <Link to="/">Sign In</Link></span>
        </div>
      </section>
    </main>
  )
}

export default Signup