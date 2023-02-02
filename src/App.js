import Home from "./components/Home";
import Header from "./pages/Header";
import "./reset.css"
import {Routes,Route} from "react-router-dom";
import Action from "./components/Action";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/action" element={<Action />} />
    </Routes>
    </div>
  );
}

export default App;
