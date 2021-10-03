import React from "react";
import "../../css/store.css";
import { Link } from "react-router-dom";
function Store() {
  return (
    <div
      className="store"
      style={{
        backgroundImage: `url(../image/store.jpg)`,
        width: "100%",
        height: "80vh",
        backgroundSize: "cover",
      }}
    >
      <div className="store-content" data-aos="flip-right">
        <h1>STORE</h1>
        <p>
          This fashion website’s page includes a shop and wear now and pay later
          feature. This tends to be popular on sites where average order value
          is high or product cost is high. Thus, allowing people who can’t pay
          in full immediately an opportunity to buy now and pay in installments
          or at a later date.{" "}
        </p>
        <Link to="/shop">ShopNow</Link>
      </div>
    </div>
  );
}

export default Store;
