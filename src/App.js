import Home from "./components/Home";
import Series from "./components/Series";
import Header from "./pages/Header";
import "./reset.css"
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/series" element={<Series />} />
    </Routes>
    </div>
  );
}

export default App;
