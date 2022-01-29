import "./App.css";
import support from "./component/assets/images/support.png";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Wage from "./component/pages/Wage/Wage";
import About from "./component/pages/About/About";
import Profile from "./component/pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Wage" element={<Wage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <div className="support_icon_container">
        <div className="support_transition"></div>
        <img className="support_icon" src={support} alt="support" />
      </div>
    </div>
  );
}

export default App;
