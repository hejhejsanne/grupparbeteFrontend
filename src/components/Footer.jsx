import React from "react";
import { Link } from "react-router-dom";
import RGAlogo from "../assets/images/RGAlogo.png";
import Gdpr from "./Gdppr";

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link className="links" to="/Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="links" to="/Faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link className="links" to="/Gdpr">
              GDPR
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
