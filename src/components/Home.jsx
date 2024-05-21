/* import { BrowserRouter, Route, Routes } from "react-router-dom"; */
import AuctionCard from "./AuctionCard";
import { useContext } from "react";
import { AuctionCardContext } from "../context/AuctionCardContext";

const Home = () => {
  const { card, setCard } = useContext(AuctionCardContext);
  return (
    <div>
      <div className="auction-card">
        <div className="auction-cards-container">
          {/* Container for flexbox */}
          {card.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      </div>
      <h1>Homepage</h1>
    </div>
  );
};

export default Home;
