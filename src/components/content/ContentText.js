import React, { useEffect } from "react";
import "../../css/contentText.css";
import { Link } from "react-router-dom";
function ContentText() {
  return (
    <div>
      <div className="contentText">
        <div className="box left" data-aos="fade-right">
          <h2>we always the best</h2>
          <p>
            We focus on small details because they are what make powerful
            products. which is our approach to design. We create minimalistic
            apparel focused on fit, form, and function. Customers are able to
            shop the look directly from the customer photo they see making it a
            smart marketing .
          </p>
          <Link to="/about">About Us</Link>
        </div>
        <div className=" box right" data-aos="fade-left">
          <h2>we always in serve</h2>
          <p>
            We wake up every morning with one goal – to create products that are
            PERSONAL. We want to make apparel that reflects what is most
            important to you: your cause, your organization, your team, your
            message to the world.
          </p>
        </div>
      </div>
      <img
        src="../image/ContentPhoto1.jpg"
        alt="content_photo"
        className="contentImage"
      />
      <div className="content-box">
        <img
          src="../image/product1.jpg"
          alt="product1"
          className="contentImage2"
        />
        <div className="text" data-aos="flip-right">
          <h1>VINTAGE LOGO T-SHIRTS</h1>
          <br />

          <p>
            {" "}
            Pulling off the classic look and appeal from the golden days of
            racing always presents a challenge. But we believe we finally nailed
            it upon our latest release. Today, we’re bringing vintage back in a
            big way.Clear the track for our latest round of drops for fall and
            winter.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentText;
