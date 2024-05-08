

const Register = () => {
    return(
         <div className="container">
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
  
  export default Register;