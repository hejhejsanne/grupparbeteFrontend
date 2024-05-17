import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegisterUser = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            alert("Fill in username, email and password!");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/api/auth/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                email,
                password,
              }),
            });

            if (response.ok){
                console.log("User created")
                navigate("/userlogin")
            } else {
                setError("Signup failed")
            } 
        } catch (error) {
            console.error("Error:", error);
            setError("An error occured")
        }    


    };





    return (
         <div>
            <h1>RgaLogo</h1>
        <form onSubmit={handleSubmit}>

            <div>
                <label>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />   
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />   
            </div>
            <button type="submit">Register</button>
            
        
        </form>
        
    </div>
    );
  };
  
  export default RegisterUser;