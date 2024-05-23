// import React from "react";

// const SingleAuction = () => {
//   return <div>SingleAuction</div>;
// };

// export default SingleAuction

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleAuction = () => {
  const [currentBid, setCurrentBid] = useState(auction.startingBid);
  const [errorMessage, setErrorMessage] = useState(null);
  const [auction, setAuction] = useState([]);

  const { id } = useParams();

  const handleBidSubmit = (event) => {
    event.preventDefault();
    const bidAmount = parseFloat(event.target.bid.value);

    // Implement bid validation logic here (e.g., minimum bid, increments)
    if (bidAmount <= currentBid) {
      setErrorMessage("Bid amount must be greater than current bid.");
      return;
    }

    // Simulate sending a bid to the server (replace with actual API call)
    fetch(`/api/auctions/${auction.id}/bid`, {
      method: "POST",
      body: JSON.stringify({ bid: bidAmount }),
    })
      .then((response) => {
        if (response.ok) {
          setCurrentBid(bidAmount);
          setErrorMessage(null); // Clear any previous errors
        } else {
          setErrorMessage("Error placing bid. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auction/${id}`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("DATA: ", data);
          setAuction(data);
        } else {
          console.error("Error fetching data: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchAuction();
  }, []);

  return (
    <div className="single-auction">
      <h2>{auction.title}</h2>
      <p>{auction.description}</p>
      {/*  <p>Current Bid: {currentBid.toFixed(2)}</p>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleBidSubmit}>
        <label htmlFor="bid">Enter your bid:</label>
        <input type="number" id="bid" min={currentBid} step="0.01" required />
        <button type="submit">Place Bid</button>
      </form> */}
    </div>
  );
};

export default SingleAuction;

// jag tror att vi kan tänka likadant som i den individuella uppgiften.
// men istället för att man har en knapp som är submit efter man valde säten
// så är annonsen knappen.
