import React from "react";
import Customer from "../components/Customer1";
import Navbar from "../components/Navbar";
import Requestquery from "../components/Requestquery";
import Footer from "../components/Footer";

const Customerservice = () => {
  return (
    <div>
      <Navbar />
      <Customer />
      <Requestquery />
      <Footer />
    </div>
  );
};

export default Customerservice;
