import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home/Home";
import Wage from "./component/pages/Wage";
import support from "./component/assets/images/support.png";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wage" element={<Wage />} />
      </Routes>
      <div className="support_icon_container">
        <div className="support_transition"></div>
        <img className="support_icon" src={support} />
      </div>
    </div>
  );
}

export default App;
