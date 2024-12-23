import React, { useState } from "react";
import "./Navbar.css";
import logoImage from "../../Assets/Images/Summit.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeTab, setActiveTab] = useState("Home"); // Track active tab
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? "auto" : "hidden";
  };

  const handleOpenPDF = () => {
    const pdfPath = "/Summit_Whitepaper.pdf";
    window.open(pdfPath, "_blank", "noopener,noreferrer");
  };

  const scrollToSection = (sectionId, tabName) => {
    setActiveTab(tabName);
  
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 200);
    } else {
      scrollToElement(sectionId);
    }
  
    setMenuActive(false);
    document.body.style.overflow = "auto"; // Reset overflow
  };
  
  const navigateAndReset = (path) => {
    navigate(path);
    setMenuActive(false);
    document.body.style.overflow = "auto"; 
  };
  
  


  const scrollToElement = (sectionId) => {
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
  };

  const handleUniteToEarnClick = () => {
    setActiveTab("Unite-to-earn");
    navigate("/unite-to-earn");
    setMenuActive(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection("Header", "Home")}>
          <img src={logoImage} alt="Logo" />
        </div>

        <div
          className={`hamburger ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${menuActive ? "active" : ""}`}>
          <li
            className={`navbar-item ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => scrollToSection("Header", "Home")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`navbar-item ${activeTab === "Launchpad" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Launchpad");
              setMenuActive(false);
              navigateAndReset("/launchpad");
            }}
          >
            <Link to="/launchpad">Launchpad</Link>
          </li>
          <li
            className={`navbar-item ${activeTab === "Roadmap" ? "active" : ""}`}
            onClick={() => scrollToSection("Roadmap", "Roadmap")}
          >
            <Link>Roadmap</Link>
          </li>
          <li
            className={`navbar-item ${activeTab === "Blogs" ? "active" : ""}`}
            onClick={() => scrollToSection("NewsBlogs", "Blogs")}
          >
            <Link>Blogs</Link>
          </li>
          <li
            className={`navbar-item ${activeTab === "Contact" ? "active" : ""}`}
            onClick={() => scrollToSection("Contactus", "Contact")}
          >
            <Link>Contact Us</Link>
          </li>
          <li
            className={`navbar-item ${activeTab === "Whitepaper" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("Whitepaper");
              handleOpenPDF();
            }}
          >
            <Link>Whitepaper</Link>
          </li>
          <li
            className={`navbar-item ${activeTab === "Unite-to-earn" ? "active" : ""}`}
            onClick={handleUniteToEarnClick}
          >
            <Link to="/unite-to-earn">Unite-to-earn</Link>
          </li>
          <li className="navbar-item mobile-wallet-btn">
            <button className="navbar-wallet-btn">Buy Now</button>
          </li>
        </ul>

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
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//     document.body.style.overflow = menuActive ? "auto" : "hidden";
//   };

//   const handleOpenPDF = () => {
//     const pdfPath = "/Summit_Whitepaper.pdf";
//     window.open(pdfPath, "_blank", "noopener,noreferrer");
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const offset = 80;
//       const elementPosition =
//         section.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//     setMenuActive(false);
//     document.body.style.overflow = "auto";
//   };

//   const handleUniteToEarnClick = () => {
//     navigate("/unite-to-earn");
//     setMenuActive(false);
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo" onClick={() => navigate("/")}>
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
//           <li className="navbar-item" onClick={() => navigate("/")}>
//             <Link onClick={() => scrollToSection("Header")}>Home</Link>
//           </li>
//           <li className="navbar-item">
//             <Link to={'/launchpad'} onClick={handleUniteToEarnClick}>Launchpad</Link>
//           </li>
//           <li className="navbar-item">
//             <Link onClick={() => scrollToSection("Roadmap")}>Roadmap</Link>
//           </li>
//           <li className="navbar-item">
//             <Link onClick={() => scrollToSection("NewsBlogs")}>Blogs</Link>
//           </li>
//           <li className="navbar-item">
//             <Link onClick={() => scrollToSection("Contactus")}>Contact Us</Link>
//           </li>
//           <li className="navbar-item">
//             <Link onClick={handleOpenPDF}>Whitepaper</Link>
//           </li>
//           <li className="navbar-item">
//             <Link to={'/unite-to-earn'} onClick={handleUniteToEarnClick}>Unite-to-earn</Link>
//           </li>
//           <li className="navbar-item mobile-wallet-btn">
//             <button className="navbar-wallet-btn">Buy Now</button>
//           </li>
//         </ul>

//         {/* Desktop Connect Wallet Button */}
//         <button className="navbar-wallet-btn desktop-wallet-btn">
//           Buy Now
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


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
