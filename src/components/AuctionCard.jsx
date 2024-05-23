import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AuctionCardList from "./AuctionCardList";

const AuctionCard = ({ auction }) => {
  // Destructure relevant auction data
  // const { id, title, image, currentBid, endingTime } = auction;

  // Format ending time for display
  // endDate kanske inte funkar skit i det i så fall och förklara
  const formattedEndingTime = formatTime(auction.endDate); // Implement formatTime function
  function formatTime(endingTime) {
    const currentTime = new Date().getTime(); // Current time in milliseconds
    const timeDifference = auction.endDate - currentTime; // Time difference in milliseconds

    // Convert time difference to days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

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

  return (
    <Link to={`/auction/${id}`}>
      {/* Link to single auction page */}
      <div className="auction-card">
        <img
          src={auction.image}
          alt={auction.title}
          className="auction-image"
        />
        <div className="auction-details">
          <h3 className="auction-title">{auction.title}</h3>
          <p className="current-bid">Current Bid: ${auction.currentBid}</p>
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

export default AuctionCard;
