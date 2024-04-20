// // Inside Navbar.js
// import React, { useState } from "react";
// import logoImage from "../images/corpify2.png"; // Adjust the path accordingly
// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleCloseMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className="navbar">
//       <img src={logoImage} alt="Corpify Logo" className="logo" />
//       <div className="menu-icon" onClick={handleMenuToggle}>
//         ☰
//       </div>
//       <SlidingMenu isOpen={menuOpen} onClose={handleCloseMenu} />
//     </div>
//   );
// };

// export default Navbar;
// Inside Navbar.js
import React, { useState } from "react";
import logoImage from "../images/corpify2.png"; // Adjust the path accordingly
import "./Navbar.css";
import Menu from "./Menu"; // Assuming you have a SlidingMenu component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <img src={logoImage} alt="Corpify Logo" className="logo" />
      <div className="menu-icon" onClick={handleMenuToggle}>
        ☰
      </div>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </div>
  );
};

export default Navbar;
