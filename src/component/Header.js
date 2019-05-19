import React from "react";
import logo from "../goldfish.svg";

const Header = () => (
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand">
      <img src={logo} alt="" style={{ height: 30 }} />
      Goldfish
    </a>
  </nav>
);
export default Header;
