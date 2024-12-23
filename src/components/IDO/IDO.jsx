import React from "react";
import ProjectCard from "./ProjectCard";
import btcLogo from "../../Assets/Images/bitcoin1.webp";
import ethLogo from "../../Assets/Images/png-ethereum.png";
import bnbLogo from "../../Assets/Images/images (3).jpeg";

const IDO = () => {
  return (
    <div className="text-white px-10 mt-20 bg-[#000]">
      <div className="container mx-auto flex-col">
        <div className="text-center mb-12">
          <h1
            
            className="text-4xl font-bold mb-4"
          >
           Upcoming IDO
          </h1>
          <p className="mb-4" style={{fontFamily:"poppins", width: "80%",
  margin: "0px auto"}}>
            <span>Why SUMMITPAD?</span> Gain early access to innovative crypto projects with Summit's upcoming IDO. Secure exclusive token allocations and be part of the next big breakthrough in blockchain technology. Don't miss out!
            growth.
          </p>
        </div>

        <div className="hidden md:block"   style={{  width: "88%", margin:'0px auto' }}>
          <div
          
            className="grid grid-cols-1 md:grid-cols-3 gap-8  "
          >
            <ProjectCard img={btcLogo} />
            <ProjectCard img={ethLogo} />
            <ProjectCard img={bnbLogo} />
          </div>
        </div>
        <div
          className="sm:block md:hidden "
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard  img={btcLogo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDO;
