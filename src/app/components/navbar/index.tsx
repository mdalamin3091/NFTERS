import React from "react";
import SearchIcon from "@/app/assets/icons/SearchIcon";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="container Navbar__wrap">
        <div className="Navbar__wrap--left">
          <a href="#" className="Navbar__wrap--logo">
            NFTERS
          </a>
          <ul className="Navbar__wrap--menu">
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Resource</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="Navbar__wrap--right">
          <div className="Navbar__wrap--right-input">
            <input type="text" placeholder="Search" />
            <SearchIcon />
          </div>
          <button>Upload </button>
          <button>Connect Wallet </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
