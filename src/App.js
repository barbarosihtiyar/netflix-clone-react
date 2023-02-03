import Home from "./components/Home";
import Header from "./pages/Header";
import "./reset.css"
import {Routes,Route} from "react-router-dom";
import Action from "./components/Action";
import Comedy from "./components/Comedy";
import Horror from "./components/Horror";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/action" element={<Action />} />
    <Route path="/comedy" element={<Comedy />} />
    <Route path="/comedy" element={<Horror />} />
    </Routes>
    </div>
  );
}

export default App;
