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

function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/home" element={<Home />} />
    <Route path="/action" element={<Action />} />
    <Route path="/comedy" element={<Comedy />} />
    <Route path="/horror" element={<Horror />} />
    <Route path="/romance" element={<Romance />} />
    <Route path="/documentary" element={<Documentary />} />
    </Routes>
    </div>
  );
}

export default App;
