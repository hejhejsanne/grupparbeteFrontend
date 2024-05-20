

import { useState, useEffect } from "react";
import AuctionCard from "./AuctionCard";
import axios from "axios";

const Home = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    // Fetch auctions data
    const fetchAuctions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/auction/add"
        );
        setAuctions(response.data);
      } catch (error) {
        console.error("Error fetching auctions:", error);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div>
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
  );
};

export default AuctionCard;
