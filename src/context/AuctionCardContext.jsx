import { createContext, useEffect, useState } from "react";
import axios from "axios";

// create context
const AuctionCardContext = createContext();

const AuctionCardProvider = ({ children }) => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/all`);
        setCard(res.data);
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    fetchAuctions();
  }, []);

  return (
    <AuctionCardContext.Provider value={{ card, setCard }}>
      {children}
    </AuctionCardContext.Provider>
  );
};

export { AuctionCardContext, AuctionCardProvider };
