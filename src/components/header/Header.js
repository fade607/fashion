import React from "react";
import "../../css/header.css";
import ContentHeader from "./ContentHeader";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(../image/background.jpg)`,
        backgroundRepeat: "no-repeat",
        // backgroundattachment: "fixed",
        backgroundposition: "center",

        backgroundSize: "contain",

        width: "100%",
        height: "100vh",
      }}
    >
      <ContentHeader />
    </div>
  );
}

export default Header;
