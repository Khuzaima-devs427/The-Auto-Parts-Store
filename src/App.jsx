import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Pages/Nav";
import Banner from "./Pages/Banner";
import Home from "./Pages/Home";
import Deals from "./Pages/Deals";
import Products from "./Pages/Products";
import CallService from "./Pages/CallService";
import TopProducts from "./Pages/TopProducts";
import Blogs from "./Pages/Blogs";
import Features from "./Pages/Features";
import Footer from "./Pages/Footer";
import Shop from "./Pages/Shop";
import Services from "./Pages/Services";



// These will be the pages shown for different routes
const MainHome = () => (
  <>
    <Banner />
    <Home />
    <Deals />
    <Products />
    <CallService />
    <TopProducts />
    <Blogs />
    <Features />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;
