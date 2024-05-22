import { useEffect, useState } from "react";
import "./style.css";
import FilteringSektion from "./FilteringSektion";
import AuctionCard from "./AuctionCard";

const Home = () => {
  const [games, setGames] = useState([]);
  const [value, setValue] = useState("");

  // useEffect för att göra API anrop
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

  // en metod för att hantera onChange
  const handleChange = (e) => {
    setValue(e.target.value);
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
              <p>{game.description}</p>
              <p>{game.recommendedAge}</p>
              <p>{game.category}</p>
              <p>{game.startPrice}</p>
              <p>{game.startDate}</p>
              <p>{game.endDate}</p>
              <p>{game.tags}</p>
              {/* <p>{game.seller}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  <div>{<AuctionCard />}</div>;
};

export default Home;
