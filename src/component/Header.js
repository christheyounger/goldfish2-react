import React from "react";
import logo from "../goldfish.svg";

const Header = () => (
  <nav className="navbar navbar-light bg-light">
    <a href="#" className="navbar-brand">
      <img src={logo} alt="" style={{ height: 30 }} />
      Goldfish
    </a>
  </nav>
);
export default Header;
