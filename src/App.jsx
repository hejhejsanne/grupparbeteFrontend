/* importing from the file */

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SingleAuction from "./components/SingleAuction";
import RegisterUser from "./components/RegisterUser";
import CreateAuction from "./components/CreateAuction";
import UserLogin from "./components/UserLogin";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FilteringSektion from "./components/FilteringSektion";

function App() {
  /* blir med path variable i urlen som vi gjorde i postman */
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
        </div>
        <div className="container">
          <Routes>
            <Route path="/createauction" exact element={<CreateAuction />} />
            <Route path="/" element={<Home />} />
            <Route path="/userlogin" exact element={<UserLogin />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/registeruser" exact element={<RegisterUser />} />
            <Route path="/singleauction" exact element={<SingleAuction />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

