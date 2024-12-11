import React from "react";
import "./Footer.css";
import { FaTelegramPlane, FaMedium, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <section id="Footer">
      <footer className="unique-footer">
        <div className="footermain-container">
          <div className="unique-footer-container">
            {/* Left Section - Logo and Description */}
            <div className="unique-footer-logo">
              <h2 className="unique-footer-title">Summit</h2>
              <p className="unique-footer-description">
                Join the Unite-to-Earn revolution and be part of the most viral
                and rewarding token ecosystem ever created. Empower your
                community, earn rewards, and shape the future of crypto!
              </p>
              <div className="unique-footer-social">
                <a href="https://t.me/officialsummit" target="_blank" rel="noreferrer" >
                <FaTelegramPlane className="svg34" color="black"/>

                </a>
                <a href="https://medium.com/@official_summit.io" target="_blank" rel="noreferrer">
                <FaMedium className="svg34" color="black" />

                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_81_4940)">
                      <path
                        d="M17.9667 0.00952148H6.01427C2.70262 0.00952148 0 2.71214 0 6.0238V17.9952C0 21.2879 2.70262 23.9905 6.01427 23.9905H17.9857C21.2974 23.9905 24 21.2879 24 17.9762V6.0238C23.981 2.71214 21.2784 0.00952148 17.9667 0.00952148ZM7.99366 19.4227H4.5678V9.52578H7.99366V19.4227ZM6.2617 8.00318C5.29104 8.00318 4.51071 7.22284 4.51071 6.25219C4.51071 5.28153 5.29104 4.50119 6.2617 4.50119C7.23236 4.50119 8.01269 5.28153 8.01269 6.25219C7.99366 7.22284 7.21332 8.00318 6.2617 8.00318ZM19.4322 19.4227H19.4132H16.5583V14.6265C16.5583 13.4655 16.406 11.981 14.8263 11.981C13.2086 11.981 12.9421 13.2371 12.9421 14.5504V19.4227H10.0872V9.52578H12.7518V10.8581H12.8279C13.2466 10.0968 14.2173 9.50675 15.7399 9.50675C18.8803 9.50675 19.4322 11.3148 19.4322 13.9984V19.4227Z"
                        fill="url(#paint0_linear_81_4940)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_81_4940"
                        x1="0"
                        y1="12"
                        x2="24"
                        y2="12"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF1CEE" />
                        <stop offset="1" stop-color="#516AFF" />
                      </linearGradient>
                      <clipPath id="clip0_81_4940">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg> */}
                </a>
                <a
                  href="https://x.com/summitofficial2"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                 <FaTwitter className="svg34" color="black"/>
                </a>
              </div>
            </div>

            {/* Middle Sections - Site Map, Company, Resource */}
            <div className="unique-footer-links">
              <div className="unique-footer-column">
                <h3>Site Map</h3>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/nft">NFT</a>
                  </li>
                  <li>
                    <a href="/roadmap">Road map</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="unique-footer-column">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="/help">Help & Support</a>
                  </li>
                  <li>
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>

              <div className="unique-footer-column">
                <h3>Resource</h3>
                <ul>
                  <li>
                    <a href="/partner">Partner</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/newsletter">Newsletter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="unique-footer-bottom">
            <p>Copyright © SUMMIT 2024 all right reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
