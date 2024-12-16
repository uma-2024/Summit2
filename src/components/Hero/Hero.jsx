import React, { useEffect, useState } from "react";
// import { useAccount, useWaitForTransaction } from "wagmi";
// import { useWeb3Modal } from "@web3modal/wagmi/react";
import { shortenAddress } from "../../Utils/HelperFunctions";
import cloudImage from "../../Assets/Images/Group 3.svg";
import cloudImage2 from "../../Assets/Images/Group 2.svg";
import planeImage from "../../Assets/Images/Group 1.svg";

const Hero = () => {
//   const { address, isConnected } = useAccount();
//   const { open, close } = useWeb3Modal();
//   const [tnxHash, setTnxHash] = useState("");
//   const { isError, isLoading, isSuccess } = useWaitForTransaction({
//     hash: tnxHash,
//   });
//   const [stakedAmount, setStakedAmount] = useState(999);

  return (
    <div className="mb-4 overflow-hidden">
      <div className="md:order-1 order-2 summit-header">
        <h1 className="d-heading text-center md:text-left">
          <span className="d-heading-gardiant pr-1">Summit- </span>
          Crypto Launchpad Excellence
        </h1>
        <p className="d-hero-para text-center md:text-left">
          Step into Summit Launchpad—where vision ignites, promises deliver, and
          investments transform into extraordinary success. Join us on a journey
          where every idea becomes a triumph and every step inspires growth!
        </p>
        {/* <p className="text-center md:text-left mb-4">
          {address
            ? "Your Total Staked Amount is " + stakedAmount + " MMIT "
            : ""}
        </p> */}
        <div className="d-hero-btn-flex justify-center mb-3">
          <button className="apply-btn">Apply Now</button>
          {/* <button className="d-hero-g-btn" onClick={open}>
            {address ? shortenAddress(address) : " Connect Wallet"}
          </button> */}
        </div>
      </div>
      <div
        style={{ margin: "0 auto" }}
        className="md:order-2 order-1 justify-center p-0"
      >
        <div className="relative justify-around d-flex top-cloud align-items-center margin-cloud">
          <img
            className="cloud-Image animate-up"
            src={cloudImage2}
            alt="cloud"
          />
          <img className="plane-image animate" src={planeImage} alt="plane" />
          <img
            className="cloud-Image animate-up"
            src={cloudImage}
            alt="cloud"
          />
        </div>
      </div>
      <div className="header-gradient-div"></div>
    </div>
  );
};

export default Hero;
