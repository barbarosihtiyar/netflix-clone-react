import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/signup.css";
import netflixLogo from "../images/Netflix-Logo-.webp";

function Signup() {
  const [namesurname,setNameSurname] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwordAgain,setPasswordAgain] = useState("");
  const [birthday,setBirthday] = useState("");
  const [status,setStatus] = useState(true);
  const [statusUser,setStatusUser] = useState(true);
  const [statusEmail,setStatusEmail] = useState(true);
  const [statusPassword,setStatusPassword] = useState(true);
  const [statusPasswordAgain,setStatusPasswordAgain] = useState(true);
  const [statusBirthday,setStatusBİrthday] = useState(true);



  const handleSubmit = (e) => {
    e.preventDefault();
    if(namesurname === "" ){
      setStatus(false)
    }else{
      setStatus(true)
    }
    if(username === "" ){
      setStatusUser(false)
    }else{
      setStatusUser(true)
    }if(email === "" ){
      setStatusEmail(false)
    }else{
      setStatusEmail(true)
    }if(password === "" ){
      setStatusPassword(false)
    }else{
      setStatusPassword(true)
    }if(passwordAgain === "" ){
      setStatusPasswordAgain(false)
    }else{
      setStatusPasswordAgain(true)
    }if(birthday === "" ){
      setStatusBİrthday(false)
    }else{
      setStatusBİrthday(true)
    }
  }

  console.log(email.value);
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
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name and Surname</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name and Surname"
                  value={namesurname}
                  onChange={(e) => setNameSurname(e.target.value)}
                  className={status === true ? "" : "redAlert"}
                />

                <label htmlFor="username">Username</label>
                <input
                  name="username"
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={statusUser ? "" : "redAlert"}
                />

                <label htmlFor="email">Email Adress</label>
                <input
                  name="email"
                  id="email"
                  type="text"
                  placeholder="Email Adress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={statusEmail ? "" : "redAlert"}
                />

                <label htmlFor="password">Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={statusPassword ? "" : "redAlert"}
                />

                <label htmlFor="passwordAgain">Password Again</label>
                <input
                  name="passwordAgain"
                  id="passwordAgain"
                  type="password"
                  placeholder="Password Again"
                  value={passwordAgain}
                  onChange={(e) => setPasswordAgain(e.target.value)}
                  className={statusPasswordAgain ? "" : "redAlert"}
                />

                <label htmlFor="birthday">Birthday</label>
                <input
                  name="birthday"
                  id="birthday"
                  type="date"
                  placeholder="mm/dd/yyyy"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className={statusBirthday ? "" : "redAlert"}
                />

                <label htmlFor="gender">Gender</label>
                <div className="malefemale">
                  <div className="male">
                    <input name="gender" id="male" type="radio" />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="female">
                    <input name="gender" id="female" type="radio" />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>

                <div className="checkbox">
                  <input type="checkbox" name="condition" id="condition" />
                  <label htmlFor="condition">
                    By ticking this box, you will be deemed to have accepted the
                    terms of use.
                  </label>
                </div>
                <button type="submit">
                  {/* <Link
                    to="/Home"
                    style={{ textDecoration: "none", color: "#000" }}
                  > */}
                    CREATE ACCOUNT
                  {/* </Link> */}
                </button>
              </form>
              <span>
                Already have an account <Link to="/">Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Signup;
