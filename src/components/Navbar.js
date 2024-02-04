import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./NavbarStyles.css";
import { FaBars, Fatimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger">
          <FaBars style={{color: '#fff'}} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
