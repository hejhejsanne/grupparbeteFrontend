// import React from "react";

// const UserLogin = () => {
//   return (
//     <div>
//       <h1>RgaLogo</h1>
//       <form>
//         <div>
//           <label>Username</label>
//           <input type="text" placeholder="Username" />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" placeholder="Password" />
//         </div>
//         <button type="submit">Log in</button>
//         <p>Forgot your username or password?</p>
//       </form>
//     </div>
//   );
// };
// export default UserLogin;

import { useState } from "react";

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasErrors, setHasErrors] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault(); // Förhindrar standardsubmit beteende

    setHasErrors(false); // Återställ fel vid varje submitförsök
    setUsernameError("");
    setPasswordError("");

    if (username === "") {
      setUsernameError("Username is required");
      setHasErrors(true);
    }

    if (password === "") {
      setPasswordError("Password is required");
      setHasErrors(true);
    }

    if (!hasErrors) {
      // Validering lyckades, simulera inloggning
      console.log(
        "Trying to login with username:",
        username,
        "password:",
        password
      );
    }
  };

  return (
    <div>
      <h1>RgaLogo</h1>
      <form onSubmit={handleLogin}>
        <div className={usernameError ? "error" : ""}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
        </div>
        <div className={passwordError ? "error" : ""}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <button type="submit">Log in</button>
        <p>Forgot your username or password?</p>
      </form>
    </div>
  );
};

export default UserLogin;
