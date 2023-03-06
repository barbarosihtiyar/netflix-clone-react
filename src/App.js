import Home from "./components/Home";
import "./reset.css"
import {Routes,Route} from "react-router-dom";
import Action from "./components/Action";
import Comedy from "./components/Comedy";
import Horror from "./components/Horror";
import Romance from "./components/Romance";
import Documentary from "./components/Documentary";
import Login from "./components/Login";
import Register from "./components/Register";
import Signup from "./components/SignUp";
import { MainContext } from "./context";
import { useState } from "react";


function App() {
  const [subsInfo,setSubsInfo] = useState({
     "namesurname" : "admin",
      "username" : "barbaros",
        "email" : "admin@hotmail.com",
        "password" : "admin",
        "passwordAgain" : "admin",
        "birthday" : "1998-08-23",
        "gender" : "male",
        "checkbox": "",
        "cardNumber" : "1111-1111-1111-1111",
        "cvc" : "111"
  });

  const data = {
    subsInfo,
    setSubsInfo
  }
  return (
    <MainContext.Provider value={data}>
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/signup" element={<Signup />} />
    <Route exact path="/home" element={<Home />} />
    <Route path="/action" element={<Action />} />
    <Route path="/comedy" element={<Comedy />} />
    <Route path="/horror" element={<Horror />} />
    <Route path="/romance" element={<Romance />} />
    <Route path="/documentary" element={<Documentary />} />
    </Routes>
    </MainContext.Provider>
  );
}

export default App;

