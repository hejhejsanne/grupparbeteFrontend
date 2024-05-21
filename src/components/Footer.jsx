import React from "react";
import { Link } from "react-router-dom";
import RGAlogo from "../assets/images/RGAlogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link className="links" to="/">
              Contact
            </Link>
          </li>
          <li>
            <Link className="links" to="/">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="links" to="/">
              GDPR
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
