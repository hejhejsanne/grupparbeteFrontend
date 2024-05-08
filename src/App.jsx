import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { SingleAuction } from "./components/SingleAuction";
import { RegisterUser } from "./components/RegisterUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/*path i url http://localhost:5173/ => Homepage */}

          <Route path="/createauction" exact element={<CreateAuction />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/registeruser" exact element={<RegisterUser />} />
          <Route path="/singleauction" exact element={<SingleAuction />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
