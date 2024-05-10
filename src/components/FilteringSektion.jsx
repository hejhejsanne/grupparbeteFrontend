// Hämtar react + categories från components
import React, { useEffect, useState } from "react";
import { categorys } from "./Items";

// Filterfunktionen
export default function FilteringSektion() {
  const [selectedfilters, setSelectedfilters] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState(items);
}
// Filtervalen sparade i en array
let filters = ["NES", "SNES", "N64", "SEGA", "GAMEBOY", "PLAYSTATION"];
