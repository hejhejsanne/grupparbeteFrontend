import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuctionCard from "./AuctionCard";
import { AuctionCardContext } from "../context/AuctionCardContext";
import { useContext } from "react";

const Home = () => {
  const { card } = useContext(AuctionCardContext);

  return (
    <div className="auctions">
      <h1>Auctions</h1>
      {card.map((auction) => (
        <AuctionCard key={id} auction={auction} />
      ))}
    </div>
  );
};

export default Home;
