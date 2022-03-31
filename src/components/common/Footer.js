import React from "react";
import "./Footer.css";
const Footer = ({ setonOff, onOff }) => {
  return (
    <footer>
      <div>
        <button className="footer-btn">
          <img
            onClick={() => {
              setonOff(true);
            }}
            className="footer-img"
            src={
              onOff
                ? "img/calculator_active.png"
                : "img/calculator_inactive.png"
            }
            alt="calculator_active"
          />
        </button>
      </div>
      <div>
        <button className="footer-btn">
          <img
            onClick={() => {
              setonOff(false);
            }}
            className="footer-img"
            src={onOff ? "img/result_inactive.png" : "img/result_active.png"}
            alt="result_inactive"
          />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
