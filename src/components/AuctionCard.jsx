import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AuctionCardList from "./AuctionCardList";

const AuctionCard = ({ auction }) => {
  // Destructure relevant auction data
  const { id, title, image, currentBid, endingTime } = auction;

  // Format ending time for display
  const formattedEndingTime = formatTime(endingTime); // Implement formatTime function

  return (
    <Link to={`/auction/${id}`}>
      {" "}
      {/* Link to single auction page */}
      <div className="auction-card">
        <img src={image} alt={title} className="auction-image" />
        <div className="auction-details">
          <h3 className="auction-title">{title}</h3>
          <p className="current-bid">Current Bid: ${currentBid.toFixed(2)}</p>
          <p className="ending-time">
            {formattedEndingTime
              ? `Ending: ${formattedEndingTime}`
              : "Ending Soon"}
          </p>
        </div>
      </div>
    </Link>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [auctions, setAuctions] = useState([]);
  useEffect(() => {
    // Fetch data and update auctions state
    fetch("/auth/auction")
      .then((response) => response.json())
      .then((data) => setAuctions(data));
  }, []);

  return (
    
    <div className="auction-cards-container">
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} auction={auction} />
      ))}
    </div>
    
  );
  
}
function formatTime(endingTime) {
    const currentTime = new Date().getTime(); // Current time in milliseconds
    const timeDifference = endingTime - currentTime; // Time difference in milliseconds
  
    // Convert time difference to days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
    // Construct the formatted string
    let formattedTimeString = "";
    if (days > 0) {
      formattedTimeString += `${days} day${days > 1 ? "s" : ""} `;
    }
    if (hours > 0) {
      formattedTimeString += `${hours} hour${hours > 1 ? "s" : ""} `;
    }
    if (minutes > 0) {
      formattedTimeString += `${minutes} minute${minutes > 1 ? "s" : ""} `;
    }
  
    return formattedTimeString.trim();
}

export default AuctionCard;


  

