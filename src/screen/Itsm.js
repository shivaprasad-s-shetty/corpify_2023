import React from "react";
import Itsm1 from "../components/Itsm1";
import Itsm2 from "../components/Itsm2";
import Navbar from "../components/Navbar";
import Itsmtext from "../components/Itsmtext";
import Itsm3 from "../components/Itsm3";
import Footer from "../components/Footer";
const Itsm = () => {
  return (
    <div>
      <Navbar />
      <Itsm1 />
      <Itsmtext />
      <Itsm2 />
      <Itsm3 />
      <Footer />
    </div>
  );
};

export default Itsm;
