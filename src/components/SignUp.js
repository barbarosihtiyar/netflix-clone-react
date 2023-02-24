import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/signup.css";
import netflixLogo from "../images/Netflix-Logo-.webp";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";

function Signup() {
  const [namesurname, setNameSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [status, setStatus] = useState(true);
  const [statusUser, setStatusUser] = useState(true);
  const [statusEmail, setStatusEmail] = useState(true);
  const [statusPassword, setStatusPassword] = useState(true);
  const [statusPasswordAgain, setStatusPasswordAgain] = useState(true);
  const [statusBirthday, setStatusBirthday] = useState(true);
  const [statusGender, setStatusGender] = useState(true);
  const [statusCheckBox, setStatusCheckBox] = useState(true);
  const [passwordLengthErrorMessage, setPasswordLengthErrorMessage] =
    useState(true);
  const [passwordAgainLengthErrorMessage, setPasswordAgainLengthErrorMessage] =
    useState(true);
  const [checkPasswordAlert, setCheckPasswordAlert] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordAgain, setShowPasswordAgain] = useState(true);
  // const [disable, setDisable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (namesurname === "") {
      setStatus(false);
    } else {
      setStatus(true);
    }
    if (username === "") {
      setStatusUser(false);
    } else {
      setStatusUser(true);
    }
    if (email === "") {
      setStatusEmail(false);
    } else {
      setStatusEmail(true);
    }
    if (isEmailValid() === false) {
      setStatusEmail(false);
    } else {
      setStatusEmail(true);
    }
    if (password === "") {
      setStatusPassword(false);
    } else {
      setStatusPassword(true);
    }
    if (passwordAgain === "") {
      setStatusPasswordAgain(false);
    } else {
      setStatusPasswordAgain(true);
    }
    if (birthday === "") {
      setStatusBirthday(false);
    } else {
      setStatusBirthday(true);
    }
    if (gender === "") {
      setStatusGender(false);
    } else {
      setStatusGender(true);
    }
    if (checkbox !== "click") {
      setStatusCheckBox(false);
    } else {
      setStatusCheckBox(true);
    }
    // sendInfo();
  };

  const isEmailValid = () => {
    const require = /\S+@\S+\.\S+/;
    return require.test(email);
  };

  const handleClick = () => {
    if (password === passwordAgain) {
      setCheckPasswordAlert(true);
      if (6 <= password.length && 6 <= passwordAgain.length) {
      } else {
        if (5 > password.length) {
          setPasswordLengthErrorMessage(false);
        }
        if (5 > passwordAgain.length) {
          setPasswordAgainLengthErrorMessage(false);
        }
      }
    } else {
      console.log("sifre eslesmiyor");
      setCheckPasswordAlert(false);
      setPasswordLengthErrorMessage(true);
      setPasswordAgainLengthErrorMessage(true);
    }
    isAvaible();
  };

  // const sendInfo = () => {
  //   if (handleClick){
  //   }
  // }

  const handleShowHiddenPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowHiddenPasswordAgain = () => {
    setShowPasswordAgain(!showPasswordAgain);
  };

  const isAvaible = () => {
    if (
      namesurname !== "" &&
      username !== "" &&
      email !== "" &&
      password !== "" &&
      passwordAgain !== "" &&
      birthday !== "" &&
      gender !== "" &&
      checkbox === "click" && 
      isEmailValid()
    ) {
      localStorage.setItem("namesurname", namesurname);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("passwordAgain", passwordAgain);
      localStorage.setItem("birthday", birthday);
      localStorage.setItem("gender", gender);  
    } else {
      console.log("Not send user information");
    }
  };

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
                <div className="flex">
                  <input
                    name="password"
                    id="password"
                    type={showPassword ? "password" : "text"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={statusPassword ? "" : "redAlert"}
                  />
                  <div
                    className="showHidePassword"
                    onClick={handleShowHiddenPassword}
                  >
                    <BiShow
                      style={{ color: "#fff" }}
                      className={showPassword ? "" : "none"}
                    />
                    <BiHide
                      style={{ color: "#fff" }}
                      className={showPassword ? "none" : ""}
                    />
                  </div>
                </div>
                <label
                  className={
                    passwordLengthErrorMessage ? "none" : "passwordErrorMessage"
                  }
                >
                  Password length must be at least 6 characters
                </label>
                <label
                  className={
                    checkPasswordAlert ? "none" : "passwordErrorMessage"
                  }
                >
                  Passwords Do Not Match
                </label>

                <label htmlFor="passwordAgain">Password Again</label>
                <div className="flex">
                  <input
                    name="passwordAgain"
                    id="passwordAgain"
                    type={showPasswordAgain ? "password" : "text"}
                    placeholder="Password Again"
                    value={passwordAgain}
                    onChange={(e) => setPasswordAgain(e.target.value)}
                    className={statusPasswordAgain ? "" : "redAlert"}
                  />
                  <div
                    className="showHidePassword"
                    onClick={handleShowHiddenPasswordAgain}
                  >
                    <BiShow
                      style={{ color: "#fff" }}
                      className={showPasswordAgain ? "" : "none"}
                    />
                    <BiHide
                      style={{ color: "#fff" }}
                      className={showPasswordAgain ? "none" : ""}
                    />
                  </div>
                </div>
                <label
                  className={
                    passwordAgainLengthErrorMessage
                      ? "none"
                      : "passwordErrorMessage"
                  }
                >
                  Password length must be at least 6 characters
                </label>
                <label
                  className={
                    checkPasswordAlert ? "none" : "passwordErrorMessage"
                  }
                >
                  Passwords Do Not Match
                </label>

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
                    <input
                      name="gender"
                      id="male"
                      type="radio"
                      className={statusGender ? "" : "redAlert"}
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      htmlFor="male"
                      className={statusGender ? "" : "warningColor"}
                    >
                      Male
                    </label>
                  </div>
                  <div className="female">
                    <input
                      name="gender"
                      id="female"
                      type="radio"
                      className={statusGender ? "" : "redAlert"}
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <label
                      htmlFor="female"
                      className={statusGender ? "" : "warningColor"}
                    >
                      Female
                    </label>
                  </div>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="condition"
                    id="condition"
                    className={statusGender ? "" : "redAlert"}
                    value="click"
                    onChange={(e) => setCheckbox(e.target.value)}
                  />
                  <label
                    htmlFor="condition"
                    className={statusCheckBox ? "" : "warningColor"}
                  >
                    By ticking this box, you will be deemed to have accepted the
                    terms of use.
                  </label>
                </div>
                <button
                  // type={disable ? "submit" : "button"}
                  type="submit"
                  onClick={handleClick}
                >
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