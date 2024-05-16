// Hämtar react + categories från components
import React, { useEffect, useState } from "react";
import { items } from "./items";
import "./style.css";

export default function FilteringSektion() {
  const [games, setGames] = useState([]);
  const [value, setValue] = useState("");

  // useEffect för att göra API anrop
  useEffect(() => {
    const fetchFilteresGames = async () => {
      if (value !== "") {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/auction/search/${value}`,
          {
            method: "GET",
            header: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("DATA: " + JSON.stringify(data));
        setGames(data);
      }
    };
    fetchFilteresGames();
  }, [value]);

  // en metod för att hantera onChange
  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div>
      <select name="filter" onChange={handleChange}>
        <option defaultValue="">Filter by game console</option>
        <option value="NES">NES</option>
        <option value="SNES">SNES</option>
        {/* <option value="N64">N64</option>
        <option value="SEGA">SEGA</option>
        <option value="GAMEBOY">SEGA</option>
        <option value="PLAYSTATION">PLAYSTATION</option> */}
      </select>
      <div>
        {games?.map((game) => (
          <div key={game.id}>
            <p>{game.image}</p>
            <p>{game.title}</p>
            {/*  <p>{game.description}</p>
            <p>{game.recommendedAge}</p>
            <p>{game.category}</p>
            <p>{game.startPrice}</p>
            <p>{game.startDate}</p>
            <p>{game.endDate}</p>
            <p>{game.tags}</p>
            <p>{game.seller}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
// export default FilteringSektion;

/*
// Filtervalen sparade i en array
let filters = ["NES", "SNES", "N64", "SEGA", "GAMEBOY", "PLAYSTATION"];

// Filterfunktionen
 const [selectedfilters, setSelectedfilters] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(items);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedfilters.includeds(selectedCategory)) {
      let filters = selectedfilters.filter((el) => el !== selectedCategory);
      setSelectedfilters(filters);
    } else {
      setSelectedfilters([...selectedfilters, selectedCategory]);
    }
  };

  useEffect(() => {
    const filterItems = () => {
      if (selectedfilters.length > 0) {
        let tempItems = selectedfilters.map((selectedCategory) => {
          let temp = items.filter((item) => item.category === selectedCategory);
          return temp;
        });
        setFilteredCategories(tempItems.flat());
      } else {
        setFilteredCategories([...items]);
      }
    };
    filterItems();
  }, [selectedfilters]);

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedfilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredCategories.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category"> {item.category} </p>
          </div>
        ))}
      </div>
    </div>
  );
*/
