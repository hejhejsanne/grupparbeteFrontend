import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleAuction = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [auction, setAuction] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getAuction = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/auction/${id}`
      );
      setAuction(res.data);
    };
    getAuction();
  }, []);

  const handleBidSubmit = (event) => {
    event.preventDefault();
    const bidAmount = parseFloat(event.target.bid.value);

    if (bidAmount <= currentBid) {
      setErrorMessage("Bid amount must be greater than current bid.");
      return;
    }

    fetch(`/api/auctions/${auction.id}/bid`, {
      method: "POST",
      body: JSON.stringify({ bid: bidAmount }),
    })
      .then((response) => {
        if (response.ok) {
          setCurrentBid(bidAmount);
          setErrorMessage(null);
        } else {
          setErrorMessage("Error placing bid. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="single-auction">
      {auction && (
        <div>
          <h2>{auction.title}</h2>
          <p>{auction.description}</p>
        </div>
      )}
    </div>
  );
};

export default SingleAuction;
