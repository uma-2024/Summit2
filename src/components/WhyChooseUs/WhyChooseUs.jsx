import React from "react";
import "./WhyChooseUs.css";
import metalogo from '../../Assets/Images/Coinbase-Logo.png'
import image3 from '../../Assets/Images/images.jpeg'
import image4 from '../../Assets/Images/Binance-Logo.wine.png'
import image5 from '../../Assets/Images/Kucoin.png'
import image2 from '../../Assets/Images/gemini.jpg'
import video from '../../Assets/Images/MG MMIT 2.mp4'
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      {/* Top Wallets Section */}
      <div className="wallets-section">
        <img src={metalogo} alt="MetaMask" className="metaImage" />
        <img src={image4} alt="Trust Wallet"  className="trustimage"/>
        <img src={image2} alt="WalletConnect" className="walletimage" />
        <img src={image3} alt="Exodus"  className="exodusimage"/>
        <img src={image5} alt="SafePal"  className="safeimage"/>
      </div>

      <div className="why-choose-us-content">
 
        <div className="text-content">
          <h2>Why Choose Us?</h2>
          <p>
          <strong>Revolutionary Unite-to-Earn Mechanism: </strong> Host events, participate, and earn—creating a vibrant, engaged community.
          <br/>
<strong>Viral Growth Potential:</strong> Our system is designed to spark viral engagement, bringing users together on a global scale.<br/>
<strong>Decentralized Ecosystem:</strong> We believe in the power of decentralized networks, where your actions contribute to the overall success of the platform.

          </p>
        </div>
<div>
<video width="600"  autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
        {/* <div className="features-grid">
          <div className="feature-card feature-card1">
            <img src={icon1Image} alt="Marketplace" />
            <p>Marketplace</p>
          </div>
          <div className="feature-card feature-card2">
            <img src={icon2Image} alt="Money Protection" />
            <p>Money Protection</p>
          </div>
          <div className="feature-card feature-card3">
            <img src={icon3Image} alt="Data Protection" />
            <p>Data Protection</p>
          </div>
          <div className="feature-card feature-card4">
            <img src={icon4Image} alt="Fast & Secure" />
            <p>Fast & Secure</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WhyChooseUs;
