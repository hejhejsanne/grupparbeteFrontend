import { Link } from "react-router-dom";
// import RGAlogo from "..assets/images/RGAlogo.png";

const Header = () => {
  console.log;
  return (
    <header className="header">
      {/* <img src={RGAlogo} alt="" /> */}
      <nav>
        <ul>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>RGA ( to be logo)</li>
          <li>
            <Link className="links" to="/createauction">
              Create Auction
            </Link>
          </li>
          <li>
            <Link className="links" to="/registeruser">
              Register
            </Link>
          </li>
          <li>
            <Link className="links" to="/userlogin">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
