import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" exact element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
