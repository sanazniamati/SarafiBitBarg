import "./App.css";
import Home from "./component/Home/Home";
import support from "./component/assets/images/support.png";
function App() {
  return (
    <div className="App">
      <Home />
      <div className="support_icon_container">
        <div className="support_transition"></div>
        <img className="support_icon" src={support} />
      </div>
    </div>
  );
}

export default App;
