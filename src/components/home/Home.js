import React from "react";
import Store from "../content/Store";
import FutureProducts from "../content/FutureProducts";
import ContentText from "../content/ContentText";
import Header from "./../header/Header";

function Home() {
  return (
    <div>
      <Header />
      <ContentText />
      <FutureProducts />
      <Store />
    </div>
  );
}

export default Home;
