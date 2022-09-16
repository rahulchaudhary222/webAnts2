import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./component/navbar/navbar";

import Services from "./component1/services/services";

function App() {
  return (
    <div className="App">
      <div id="app1">
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Services />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
