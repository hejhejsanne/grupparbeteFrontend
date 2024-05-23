import { useEffect, useState } from "react";
import "./style.css";
import FilteringSektion from "./FilteringSektion";
import { useNavigate } from "react-router-dom";
import AuctionCard from "./AuctionCard";

const Home = ({ auction }) => {
  const [games, setGames] = useState([]);
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilteredGames = async () => {
      if (value !== "") {
        const url = `${import.meta.env.VITE_API_URL}/auction/search/${value}`;
        console.log("Fetching URL: ", url);
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.ok) {
            const data = await response.json();
            console.log("DATA: ", data);
            setGames(data);
          } else {
            console.error("Error fetching data: ", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      }
    };

    fetchFilteredGames();
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchAuctionDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auction/all`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("DATA: ", data);
          setAuctions(data);
        } else {
          console.error("Error fetching data: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchAuctionDetails();
  }, []);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    if (auction) {
      navigate(`/singleauction/${auction.id}`);
    }
  };

  return (
    <div>
      <div>
        <select name="filter" onChange={handleChange} defaultValue="">
          <option value="" disabled>
            Filter by game console
          </option>
          <option value="NES">NES</option>
          <option value="SNES">SNES</option>
          <option value="N64">N64</option>
          <option value="SEGA">SEGA</option>
          <option value="GAMEBOY">GAMEBOY</option>
          <option value="PLAYSTATION">PLAYSTATION</option>
        </select>
        <div>
          {games.map((game) => (
            <div key={game.id}>
              <p>{game.image}</p>
              <p>{game.title}</p>
              {/*<p>{game.endDate}</p>
               <p>{game.description}</p>
              <p>{game.recommendedAge}</p>
              <p>{game.category}</p>
              <p>{game.startPrice}</p>
              <p>{game.startDate}</p>
              <p>{game.tags}</p>
              { <p>{game.seller}</p> } */}
            </div>
          ))}
        </div>
      </div>

      <div>
        {auctions.map((auction) => (
          <AuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
    </div>
  );
};

export default Home;
