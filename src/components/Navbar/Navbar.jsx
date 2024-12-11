import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../Assets/Images/Summit.svg";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? "auto" : "hidden"; 
  };
  const handleOpenPDF = () => {
    const pdfPath = "/Summit_Whitepaper.pdf";
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  // Function to scroll to the top of the page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; 
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuActive(false); 
    document.body.style.overflow = "auto"; 
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logoImage} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Items */}
        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          <li className="navbar-item">
            <a onClick={() => scrollToSection("Header")}>Home</a>
          </li>
          <li className="navbar-item">
            <a onClick={() => scrollToSection("Aboutus")}>About</a>
          </li>
          <li className="navbar-item">
            <a onClick={() => scrollToSection("Roadmap")}>Roadmap</a>
          </li>
          <li className="navbar-item">
            <a onClick={() => scrollToSection("NewsBlogs")}>Blogs</a>
          </li>
          <li className="navbar-item">
            <a onClick={() => scrollToSection("Footer")}>Contact Us</a>
          </li>
          <li className="navbar-item">
            <a onClick={handleOpenPDF}>Whitepaper</a>
          </li>
          <li className="navbar-item">
            <a href="/unite-to-earn">Unite-to-earn</a>
          </li>
          <li className="navbar-item mobile-wallet-btn">
            <button className="navbar-wallet-btn">Buy Now</button>
          </li>
        </ul>

        {/* Desktop Connect Wallet Button */}
        <button className="navbar-wallet-btn desktop-wallet-btn">
        Buy Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;





// import React, { useState } from "react";
// import "./Navbar.css";
// import logoImage from "../../Assets/Images/Summit.svg";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//     document.body.style.overflow = menuActive ? "auto" : "hidden"; // Prevent body scrolling when the menu is open
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <img src={logoImage} alt="Logo" />
//         </div>

//         {/* Hamburger Icon */}
//         <div
//           className={`hamburger ${menuActive ? "active" : ""}`}
//           onClick={toggleMenu}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         {/* Menu Items */}
//         <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
//           <li className="navbar-item">
//             <a href="/">Home</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/about">About</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/insights">Roadmap</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/points">Blogs</a>
//           </li>
//           <li className="navbar-item">
//             <a href="/changelog">Contact Us</a>
//           </li>
//           <li className="navbar-item mobile-wallet-btn">
//             <button className="navbar-wallet-btn">Connect Wallet</button>
//           </li>
//         </ul>

//         {/* Desktop Connect Wallet Button */}
//         <button className="navbar-wallet-btn desktop-wallet-btn">
//           Connect Wallet
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
