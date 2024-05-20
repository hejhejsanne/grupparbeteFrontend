import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SingleAuction from "./components/SingleAuction";
import RegisterUser from "./components/RegisterUser";
import CreateAuction from "./components/CreateAuction";
import UserLogin from "./components/UserLogin";
import AuctionCard from "./components/AuctionCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
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
            {auctions.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
