import React from "react";
import "./Header.css";
const Header = ({ onOff }) => {
  return (
    <header className="header">
      <h1 className="header-title">{onOff ? "Calculator" : "Result"}</h1>
    </header>
  );
};

export default Header;
