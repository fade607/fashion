import React from "react";
import { Link } from "react-router-dom";
import "../../css/sidbar.css";

function Sidbar() {
  return (
    <div className="sidbar-list">
      <ul>
        <Link to="/about">About Us</Link>
        <Link to="/models">Models</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/serveices">Services</Link>
      </ul>
    </div>
  );
}

export default Sidbar;
