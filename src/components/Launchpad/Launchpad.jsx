import React from "react";
import Hero from "../Hero/Hero";
import Figure from "../Figure/Figure";
import Steps from "../Steps/Steps";
import MarqueeS from "../MarqueeS/MarqueeS";

import Footer from "../Footer/Footer";
import IDO from "../IDO/IDO";
import './Launchpad.css'
import BuySummitNow from "../BuySummitNow/BuySummitNow";
const Launchpad = () => {
  return (
    <div id="LaunchpadSection">
      <Hero />
      <BuySummitNow/>
      <Figure />
      <Steps />
      <MarqueeS />
      <IDO />
      <Footer />
    </div>
  );
};

export default Launchpad;
