import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Sidbar from "./Sidbar";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [openNav, setopenNav] = useState(false);
  console.log(openNav);
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link to="/"> fashion </Link>
        </div>

        <div className="list">
          <ul>
            <Link to="/about" onClick={() => setopenNav(!openNav)}>
              About Us
            </Link>
            <Link to="/models" onClick={() => setopenNav(!openNav)}>
              Models
            </Link>
            <Link to="/shop" onClick={() => setopenNav(!openNav)}>
              Shop
            </Link>
            <Link to="/contact" onClick={() => setopenNav(!openNav)}>
              Contact Us
            </Link>
            <Link to="/serveices" onClick={() => setopenNav(!openNav)}>
              Services
            </Link>
          </ul>
        </div>

        <Link onClick={() => setopenNav(!openNav)} className="header-icon">
          {openNav ? <CloseIcon /> : <MenuIcon />}{" "}
        </Link>
      </div>
      {openNav ? <Sidbar /> : null}
    </div>
  );
}

export default Navbar;
