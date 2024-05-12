import { useContext } from "react";
import testBild from "../assets/images/testBild.jpg";
import { AuctionCardContext } from "../context/AuctionCardContext";

const AuctionCard = ({ auction }) => {
  // const [img, setImg] = useState("");
  // const [title, setTitle] = useState("");
  // const [endDate, setEndDate] = useState("");
  // Separate state variables, ist this better to use or not?

  // const { auction } = useContext(AuctionCardContext);

  //   singel object props
  const { image, title, endDate } = auction;

  //   error handler that puts in another photo if there are none
  const handleImageError = (event) => {
    event.target.src = "/default-auction-image.jpg";
  };

  //const formatEndDate = new Date(endDate).toLocaleDateString();
  // this can be used to format the end date for display if we dont have it allready in backend
  //   if this is going to be used, put {formatEndDate} insted of {endDate} in the p tag

  return (
    <div className="container">
      <div className="card-box">
        <div className="image image1">
          <img src={image} alt="picture" onError={handleImageError} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;

// this is my hardcoded box that worked!

// {/* <div className="container">
//       <div className="card-box">
//         <div className="image image1">
//           <img src={testBild} alt="spelkonsoll" />
//         </div>
//         <div className="title">nintendo 64</div>
//         <div className="endDate"> 7/8 kl 12.00</div>
//       </div>
//     </div> */}
