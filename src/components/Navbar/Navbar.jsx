import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../Assets/Images/Summit.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? "auto" : "hidden";
  };

  const handleOpenPDF = () => {
    const pdfPath = "/Summit_Whitepaper.pdf";
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuActive(false);
    document.body.style.overflow = "auto";
  };

  const handleUniteToEarnClick = () => {
    navigate("/unite-to-earn");
    setMenuActive(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => navigate("/")}>
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
          <li className="navbar-item" onClick={() => navigate("/")}>
            <Link onClick={() => scrollToSection("Header")}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to={'https://summitpad-new.vercel.app/'} onClick={handleUniteToEarnClick}>Launchpad</Link>
          </li>
          <li className="navbar-item">
            <Link onClick={() => scrollToSection("Roadmap")}>Roadmap</Link>
          </li>
          <li className="navbar-item">
            <Link onClick={() => scrollToSection("NewsBlogs")}>Blogs</Link>
          </li>
          <li className="navbar-item">
            <Link onClick={() => scrollToSection("Contactus")}>Contact Us</Link>
          </li>
          <li className="navbar-item">
            <Link onClick={handleOpenPDF}>Whitepaper</Link>
          </li>
          <li className="navbar-item">
            <Link to={'/unite-to-earn'} onClick={handleUniteToEarnClick}>Unite-to-earn</Link>
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
