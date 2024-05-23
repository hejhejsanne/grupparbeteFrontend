import { useEffect, useState } from "react";
import "./style.css";
import FilteringSektion from "./FilteringSektion"; // Assuming this component handles filtering logic
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = ({ auction }) => {
  const [games, setGames] = useState([]);
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate(); // Assuming you have useNavigate imported

  // useEffect for API calls
  useEffect(() => {
    const fetchFilteredGames = async () => {
      if (value !== "") {
        const url = `${import.meta.env.VITE_API_URL}/auction/search/${value}`;
        console.log("Fetching URL: ", url);
        try {
          const response = await fetch(url, {
            method: "GET",
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

    fetchAuctionDetails(); // Call this after games are fetched
  }, []);

  const handleCardClick = () => {
    setIsSelected(!isSelected); // Toggle isSelected state
    if (auction) {
      navigate(`/singleauction/${auction.id}`); // Navigate on click
    }

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
                <p>{game.title}</p>
                <p>{game.description}</p>
                <p>{game.recommendedAge}</p>
                <p>{game.category}</p>
                <p>{game.startPrice}</p>
                <p>{game.startDate}</p>
                <p>{game.endDate}</p>
                <p>{game.tags}</p>
                {/* Conditionally render image if game.image is a URL */}
                {game.image && <img src={game.image} alt={game.title} />}
              </div>
            ))}
          </div>
          <div className="auction-card">
            {auctions && ( // Check if auction data exists
              <>
                <img src={auction.imageUrl} alt={auction.title} />
                <h3>{auction.title}</h3>
                <p>{auction.description}</p>
                <button onClick={handleCardClick} disabled={isSelected}>
                  {isSelected ? "Selected" : "View Details"}
                </button>
                {/* Conditionally render additional auction details */}
                {isSelected && (
                  <div>
                    <p>{auction.title}</p>
                    {/* ... other details ... */}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };
};

export default Home;

// import { useEffect, useState } from "react";
// import "./style.css";
// import FilteringSektion from "./FilteringSektion";
// import { Navigate } from "react-router-dom";

// const Home = () => {
//   const [games, setGames] = useState([]);
//   const [value, setValue] = useState("");
//   const [isSelected, setIsSelected] = useState(false);
//   const navigate = useNavigate();

//   // useEffect för att göra API anrop
//   useEffect(() => {
//     const fetchFilteredGames = async () => {
//       if (value !== "") {
//         const url = `${import.meta.env.VITE_API_URL}/auction/search/${value}`;
//         console.log("Fetching URL: ", url);
//         try {
//           const response = await fetch(url, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (response.ok) {
//             const data = await response.json();
//             console.log("DATA: ", data);
//             setGames(data);
//           } else {
//             console.error("Error fetching data: ", response.statusText);
//           }
//         } catch (error) {
//           console.error("Error fetching data: ", error);
//         }
//       }
//     };

//     fetchFilteredGames();

//     const handleCardClick = () => {
//       setIsSelected(!isSelected); // Toggle isSelected state
//       // ... navigate if needed ...
//     };

//     const handleChange = (e) => {
//       setValue(e.target.value);
//     };

//   }, [value]);

//   return (
//     <div>
//       <div>
//         <select name="filter" onChange={handleChange} defaultValue="">
//           <option value="" disabled>
//             Filter by game console
//           </option>
//           <option value="NES">NES</option>
//           <option value="SNES">SNES</option>
//           <option value="N64">N64</option>
//           <option value="SEGA">SEGA</option>
//           <option value="GAMEBOY">GAMEBOY</option>
//           <option value="PLAYSTATION">PLAYSTATION</option>
//         </select>
//         <div>
//           {games.map((game) => (
//             <div key={game.id}>
//               <p>{game.image}</p>
//               <p>{game.title}</p>
//               <p>{game.description}</p>
//               <p>{game.recommendedAge}</p>
//               <p>{game.category}</p>
//               <p>{game.startPrice}</p>
//               <p>{game.startDate}</p>
//               <p>{game.endDate}</p>
//               <p>{game.tags}</p>
//               {/* <p>{game.seller}</p> */}
//             </div>
//           ))}
//         </div>
//         <div className="auction-card">
//           <img src={auction.imageUrl} alt={auction.title} />
//           <h3>{auction.title}</h3>
//           <p>{auction.description}</p>
//           <button onClick={handleCardClick} disabled={isSelected}>
//             {isSelected ? "Selected" : "View Details"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
