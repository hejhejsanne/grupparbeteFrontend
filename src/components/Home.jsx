import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuctionCard from "./AuctionCard";
import { AuctionCardContext } from "../context/AuctionCardContext";

const Home = () => {
  return (
    <div className="auctions">
      <h1>Auctions</h1>
      {auctions.map((auction) => (
        <AuctionCard key={auctions.id} auction={auction} />
      ))}
    </div>
  );
};

export default Home;

// const [auctions, setAuctions] = useState([]);

// useEffect(() => {
//   const fetchAuctions = async () => {
//     const response = await fetch("/auctions/all");
//     const data = await response.json();
//     setAuctions(data);
//   };
//   fetchAuctions();
// }, []);
