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
import Account from "./pages/Account";
import ProfileManagament from "./pages/ProfileManagament";
import LandingPage from "./pages/LandingPage";
import Favorite from "./pages/Favorite";
import NotFound from "./pages/NotFound";


function App() {
  const [subsInfo,setSubsInfo] = useState({
        "namesurname" : "admin",
        "username" : "barbaros",
        "email" : "admin@hotmail.com",
        "password" : "admin",
        "passwordAgain" : "admin",
        "phoneNumber" : "05452034598",
        "birthday" : "1998-08-23",
        "gender" : "male",
        "checkbox": "",
        "cardNumber" : "1111-1111-1111-1111",
        "cvc" : "111"
  });

  const [edit,setEdit] = useState(false);
  const [gameusername,setGameusername] = useState("");
  const [change,setChange] = useState("");
  const [favList,setFavList] = useState([]);

  const data = {
    subsInfo,
    setSubsInfo,
    edit,
    setEdit,
    gameusername,
    setGameusername,
    change,
    setChange,
    favList,
    setFavList
  }
  return (
    <MainContext.Provider value={data}>
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route  path="/register" element={<Register />} />
    <Route  path="/signup" element={<Signup />} />
    <Route  path="/home" element={<Home />} />
    <Route  path="/landingpage" element={<LandingPage />} />
    <Route path="/action" element={<Action />} />
    <Route path="/comedy" element={<Comedy />} />
    <Route path="/horror" element={<Horror />} />
    <Route path="/romance" element={<Romance />} />
    <Route path="/documentary" element={<Documentary />} />
    <Route path="/account" element={<Account />} />
    <Route path="/profilemanagement" element={<ProfileManagament />} />
    <Route path="/favorite" element={<Favorite />} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </MainContext.Provider>
  );
}

export default App;