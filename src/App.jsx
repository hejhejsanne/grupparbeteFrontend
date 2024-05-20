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
import AuctionCard from "./components/AuctionCard";
import AuctionList from "./components/AuctionCardList"
import AuctionCardList from "./components/AuctionCardList";
import { AuctionCardContext, AuctionCardProvider } from "./context/AuctionCardContext";

function App() {
  const [count, setCount] = useState(0);

  /* blir med path variable i urlen som vi gjorde i postman */
  return (
    <AuthProvider>
      <BrowserRouter>
      <AuctionCardProvider>
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
          <div className="auction-card">
            <div className="auction-cards-container">
              {/* Container for flexbox */}
              {SingleAuction.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
        </AuctionCardProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
