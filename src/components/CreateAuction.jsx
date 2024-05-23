import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAuction = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recommendedAge, setRecommendedAge] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [img, setImg] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const [error, setError] = useState("");
  // const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !title ||
      !description ||
      !recommendedAge ||
      !startPrice ||
      !startDate ||
      !endDate ||
      !img ||
      !tags
    ) {
      setError("Please fill out all fields");
      return; // Return early if validation fails
    }

    try {
      // Sending data to backend
      const response = await fetch("http://localhost:8080/api/auction/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          recommendedAge,
          startPrice,
          startDate,
          endDate,
          img,
          tags: tags.split(",").map((tag) => tag.trim()),
        }),
      });

      if (response.ok) {
        const { id } = await response.json;
        // Redirect or handle successful response
        navigate("/auction/${id}");
      } else {
        // Handle error response from the backend
        setError("Failed to create auction");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Recommended Age:</label>
        <input
          type="number"
          value={recommendedAge}
          onChange={(e) => setRecommendedAge(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Price:</label>
        <input
          type="number"
          value={startPrice}
          onChange={(e) => setStartPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" onChange={(e) => setImg(e.target.value)} required />
      </div>
      <div>
        <label>Tags</label>
        <textarea
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
      </div>
      {error && <div>{error}</div>}
      <button className="auction-btn" type="submit">
        Create Auction
      </button>
    </form>
  );
};

export default CreateAuction;
