import React from "react";
import AuctionCard from "./AuctionCard"; // Import your AuctionCard component

const AuctionList = ({ auctions }) => {
  // Use auctions prop instead of SingleAuction
  return (
    <div className="auction-list">
      <div className="auction-cards-container">
        {" "}
        {/* Container for flexbox */}
        {auctions.map(
          (
            auction // Use auctions prop for mapping
          ) => (
            <AuctionCard key={auction.id} auction={auction} />
          )
        )}
      </div>
    </div>
  );
};

export default AuctionList;
