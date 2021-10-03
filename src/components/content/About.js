import React from "react";
import "../../css/about.css";

function About() {
  return (
    <div className="about">
      <div className="text">
        {" "}
        <h1>About Us:</h1>
        <p>
          Designers worked in exceedingly unusual circumstances, in a vacuum,
          catering to an audience whose lives are forever changed—and ultimately
          showed their collections virtually or in very intimate settings. And
          yet, creativity reigned. For fall 2021, the collections fell in line
          with the times by embracing that new outdoor après-ski life, prepping
          for a new-wave Roaring ’20s, finding stability in LBDs, and keeping
          comfort key in elevated knitwear. See what's in store for next season
          in 13 trend stories and shop key piece to add to your wardrobe now.
          There's a Saint Laurent dress we'll be dreaming about until it makes
          its way home to us and a Bottega Veneta puffer coat we simply can't
          enter colder weather without.
        </p>
      </div>
      <div className="about-box">
        <div className="box-left" data-aos="fade-right">
          <img src="../image/about1.jpg" alt="about1" />
        </div>
        <div className="box-right" data-aos="fade-left">
          <p>
            We have always sourced our products from independent designers, not
            sold farmed fur, or exotic skins and have been a proponent of slow
            fashion cycles. We have now put into action a formalised framework
            to ensure that designers are incentivised to source and manufacture
            sustainably and ethically.
          </p>
        </div>
      </div>
      <div className="about-box">
        <div className="box-right" data-aos="fade-right">
          <p>
            We aim to foster a global community of local brands in order to
            create a more human-centred approach to retail. We do this by
            working with over 1000 designers across the world, ensuring the
            majority of sales go directly to them, so that they can continue to
            innovate.
          </p>
        </div>
        <div className="box-left" data-aos="fade-left">
          <img src="../image/about2.jfif" alt="about1" />
        </div>
      </div>
      <div className="about-box">
        <div className="box-left" data-aos="fade-right">
          <img src="../image/about3.jpg" alt="about1" />
        </div>
        <div className="box-right" data-aos="fade-left">
          <p>
            For men and women looking for high street fashion items,This website
            makes it easy for you to find and shop amazing jewelry and
            accessories, from its humble beginnings as an eBay vintage shop and
            everything fashion from independent designers that are ethically and
            sustainably produced.
          </p>
        </div>
      </div>{" "}
      <div className="about-box">
        <div className="box-right" data-aos="fade-right">
          <p>
            If you love neutral tones, you’re going to have a field day browsing
            through Meshki’s categories. The label also offers jumpsuits,
            separates, resort wear, basics, swimwear, lingerie, and activewear
            at mouthwatering prices. In addition, Meshki releases special themed
            collections from time to time.
          </p>
        </div>
        <div className="box-left" data-aos="fade-left">
          <img src="../image/about4.jpg" alt="about1" />
        </div>
      </div>
    </div>
  );
}

export default About;
