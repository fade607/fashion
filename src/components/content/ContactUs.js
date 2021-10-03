import React from "react";
import "../../css/contactus.css";
function ContactUs() {
  return (
    <div className="contact-us">
      <h1>feel free to contact us</h1>
      <div
        style={{ backgroundImage: `url(../image/contact.jpg)` }}
        className="form-contact"
        data-aos="fade-left"
      >
        <form data-aos="fade-down-right">
          <h4>YOUR DETAILS</h4>

          <label>First Name:</label>
          <input type="text" placeholder="First Name" />
          <label>Last Name:</label>
          <input type="text" placeholder="Last Name" />

          <label>Mobile Number:</label>
          <input type="tel" placeholder="Mobile Number" />
          <label>Your Email:</label>
          <input type="email" placeholder="email" />

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
