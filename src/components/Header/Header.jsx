import React from "react";
import "./Header.css";
import headerImage from "../../Assets/Images/hedaerImage.png";

const Header = () => {
  return (
    <section id="Header">
      <div className="summit-container">
        <div className="text-section">
          <h1>Unite, Earn, and Go Viral</h1>
          <p>
          Create. Participate. Earn. Take charge of your crypto journey with Summit and endless earning opportunities.
          </p>
          <div className="button-group">
            <button className="btn connect-wallet">BUY NOW</button>
            <button className="btn whitelist-now">UNITE TO EARN</button>
          </div>
        </div>

        <div className="image-section">
          <div className="image-triangle-background">
            <img src={headerImage} alt="Summit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
