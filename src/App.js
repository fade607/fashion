import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/content/About";
import ContactUs from "./components/content/ContactUs";
import Services from "./components/content/Services";
import Models from "./components/content/Models";
import Shop from "./components/content/Shop";
import Home from "./components/home/Home";
import Navbar from "./components/header/Navbar";
import SingleProduct from "./components/content/SingleProduct";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/serveices" component={Services} />
          <Route path="/models" component={Models} />

          <Route path="/shop" component={Shop} />
          <Route path="/:id" children={<SingleProduct />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
