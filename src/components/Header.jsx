import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>Investmen calculator</h1>
    </header>
  );
};

export default Header;
