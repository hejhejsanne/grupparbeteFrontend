import RGAlogo from "./RGAlogo.png";
const Header = () => {
  console.log
  return (
    <header className="Header">
      <img src={RGAlogo} alt="" />
      <nav>
      
        <ul>
          <li>Home</li>
          <li>RGA</li>
          <li>Create Auction</li>
          <li>Register</li>
          <li>Log in</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
