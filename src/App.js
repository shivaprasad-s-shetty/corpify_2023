// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Careers from "./screen/Careers";
import Customer from "./components/Customer1";
import Customerservice from "./screen/Customerservice";
import Itsm from "./screen/Itsm";
import Finance from "./screen/Finance";
import Peopleop from "./screen/Peopleop";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/customer-service" element={<Customerservice />} />
          <Route path="/itsm" element={<Itsm />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/peopleop" element={<Peopleop />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
