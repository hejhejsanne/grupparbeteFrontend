// Hämtar react + categories från components
import React, { useEffect, useState } from "react";
import items from "./Items";
import "./style.css";

// Filterfunktionen
export default function FilteringSektion() {
  const [selectedfilters, setSelectedfilters] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(items);

  // Filtervalen sparade i en array
  let filters = ["NES", "SNES", "N64", "SEGA", "GAMEBOY", "PLAYSTATION"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedfilters.includeds(selectedCategory)) {
      let filters = selectedfilters.filter((el) => el !== selectedCategory);
      setSelectedfilters(filters);
    } else {
      setSelectedfilters([...selectedfilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedfilters]);

  const filterItems = () => {
    if (selectedfilters.length > 0) {
      let tempItems = selectedfilters.map((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...items]);
    }
  };

  return (
    <div>
      <div className="buttons-container">
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            classname={`button ${
              selectedfilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="items-container">
        {filteredItems.map((item, idx) => (
          <div key={`items-${idx}`} className="item">
            <p>{item.name}</p>
            <p className="category"> {item.category} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
// export default FilteringSektion;
