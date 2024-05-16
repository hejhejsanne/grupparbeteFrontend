import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterUser = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            alert("Fill in username, email and password!");
            return;
        }

        try {
            const { data } = await axios.post(
              `${import.meta.env.VITE_API_URL}/auth/signup`,
              {
                username,
                email,
                password,
              },
              { withCredentials: true }
            );
            return navigate("/");
        } catch (err){
            console.log("Error: " + err);
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
                    placeholder="Username"
                />
            </div>

            <div>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                />   
            </div>

            <div>
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password"
                />   
            </div>
            <button type="submit">Register</button>
            
        
        </form>
        
    </div>
    );
  };
  
  export default RegisterUser;