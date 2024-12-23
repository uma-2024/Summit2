import React, { useState } from "react";
import "./BuySummitNow.css";

const BuySummitNow = () => {
  const [status, setStatus] = useState("Live Now");

  return (
    <div className="buy-summit-container">
      <div className="timer">0:00:00</div>

      <div className="status">
        <span className="new-badge">New</span>
        <span className="status-item">Wait Is Over</span>
        <span
          className={`status-item ${
            status === "Live Now" ? "live" : "completed"
          }`}
        >
          {status}
        </span>
      </div>

      <h1 className="heading">
        BUY YOUR SUMMIT
        <br /> NOW
      </h1>

      <p className="description">
        We help individuals and businesses to securely send and receive money
        globally, without the bank fees.
      </p>

      <div className="amounts">
        <div className="amount-item">
          <span>Staked Amount</span>
          <div className="amount-value">$100</div>
        </div>
        <div className="amount-item">
          <span>Allocated Amount</span>
          <div className="amount-value">$50</div>
        </div>
      </div>

      <div className="summit-box">
        <div className="dollar-price">
          <div className="dollar">$</div>
          <div className="price">50</div>
        </div>

        <div className="summit">100 SUMMIT</div>
      </div>

      <button className="claim-button">
        {status === "Live Now" ? "BUY" : "CLAIM NOW"}
      </button>
    </div>
  );
};

export default BuySummitNow;
