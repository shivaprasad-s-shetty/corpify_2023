import React from "react";
import Navbar from "../components/Navbar";
import TopVideo from "../components/Topvideo";
import Email from "../components/Emailsection";
import Products from "../components/Products";
import Threepiller from "../components/Threepiller";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <TopVideo />
      <Email />
      <Products />
      <Threepiller />
      <Footer />
    </div>
  );
};

export default Home;
