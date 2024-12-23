import React from "react";
import "./Roadmap.css";

const Roadmap = () => {
  const parseContent = (text) => {
    const boldParsed = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return boldParsed.replace(/\n/g, "<br/>");
  };

  const roadmapData = [
    {
      month: "October 2024 ",
      title: "The Launch Pad",
      description:
        "**Token Launch:** Official release of the meme token with the Unite-to-Earn mechanism.\n **Early Holder Rewards:** Introduce a special reward system for the first 10K token holders, incentivizing long-term holding.\n **Initial Listings:** Get listed on major exchanges. ",
    },
    {
      month: "November 2024",
      title: " Building the Foundation",
      description:
        "**Summit Program Activation:** Launch the Summit Program, empowering users to host events and earn rewards. \n **Airdrop Campaign**: Execute a massive airdrop campaign to onboard 10-15K new users and increase token visibility.\n **Community Growth Initiatives:** Host AMAs, Twitter Spaces, and Telegram meetups to engage and expand the community.",
    },
    {
      month: "December 2024",
      title: " Expanding Reach",
      description:
        "**Centralized Exchange Listings:** Secure listings on mid-tier centralized exchanges (CEX) like KuCoin, Gate.io, and MEXC for broader reach. \n **Staking Rewards Launch:** Roll out staking features for holders, offering lucrative staking rewards to encourage long-term commitment. \n **Global Marketing Push:** Launch a multi-channel marketing campaign targeting international crypto communities, including KOL involvement.",
    },
    {
      month: "January 2025",
      title: "Momentum Building",
      description:
        "**Further Exchange Listings:** Expand to more significant CEXs such as Huobi, Kraken, and Bybit, increasing liquidity and accessibility. \n **Holder Growth Incentives:** Offer exclusive bonuses and NFTs to holders who stake tokens for a longer duration or participate in the Summit Program. \n **International Events:** Arrange global crypto summits and conferences, showcasing the project to large audiences and influencers.",
    },
    {
      month: "February 2025",
      title: "Preparing for the Big Leap",
      description:
        "**Binance Listing Preparation:** Finalize requirements and documentation for a successful Binance listing, focusing on liquidity and volume thresholds.\n **Unite-to-Earn 2.0:** Upgrade Unite-to-Earn 2.0 with gamification and enhanced rewards to boost user participation.\n **Holder Growth Campaign:** Target 50K+ holders by launching exclusive rewards and referral programs, offering bonuses for onboarding new holders.",
    },
    {
      month: "March 2025",
      title: " The Breakthrough Moment",
      description:
        "**Binance Listing:** Officially listed on Binance, marking a significant milestone and driving massive visibility and liquidity.\n **Top 50 Achievement:** With the Binance listing and global attention, the token aims to break into the top 50 cryptocurrencies by market cap.\n **Massive Holder Growth:** Launch partnerships and promotions to onboard 100K+ holders, making the token viral and highly rewarding.",
    },
  ];

  return (
    <section id="Roadmap">
      <div className="roadmap-container">
        <h2>Road map 2024</h2>
        <p className="subtitle">
          Here’s a detailed monthly plan from October 2024 to March 2025,
          focusing on key milestones like the Binance listing, growing the
          holder base, and reaching the top 50 by market cap.
        </p>
        <div className="timeline">
          <div style={{position: "absolute"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="circle-svg1"
              
            >
              <circle cx="12" cy="12" r="12" fill="#15BFFD" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="circle-svg5"
            >
              <circle cx="12" cy="12" r="12" fill="#15BFFD" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="circle-svg2"
            
            >
              <circle cx="12" cy="12" r="12" fill="#15BFFD" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="circle-svg3"
             
            >
              <circle cx="12" cy="12" r="12" fill="#15BFFD" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="circle-svg4"
            
            >
              <circle cx="12" cy="12" r="12" fill="#15BFFD" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
    className="circle-svg6"
            >
              <circle cx="12" cy="12" r="12" fill="#15BFFD" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="7"
              viewBox="0 0 64 7"
              fill="none"
              className="arrow-svg1"
            >
              <path
                d="M0 3.5L5 6.38675L5 0.613249L0 3.5ZM4.36364 4L7.27273 4L7.27273 3L4.36364 3L4.36364 4ZM10.1818 4L13.0909 4L13.0909 3L10.1818 3L10.1818 4ZM16 4L18.9091 4L18.9091 3L16 3L16 4ZM21.8182 4L24.7273 4L24.7273 3L21.8182 3L21.8182 4ZM27.6364 4L30.5455 4.00001L30.5455 3.00001L27.6364 3L27.6364 4ZM33.4546 4.00001L36.3636 4.00001L36.3636 3.00001L33.4546 3.00001L33.4546 4.00001ZM39.2727 4.00001L42.1818 4.00001L42.1818 3.00001L39.2727 3.00001L39.2727 4.00001ZM45.0909 4.00001L48 4.00001L48 3.00001L45.0909 3.00001L45.0909 4.00001ZM50.9091 4.00001L53.8182 4.00001L53.8182 3.00001L50.9091 3.00001L50.9091 4.00001ZM56.7273 4.00001L59.6364 4.00001L59.6364 3.00001L56.7273 3.00001L56.7273 4.00001ZM62.5455 4.00001L64 4.00001L64 3.00001L62.5455 3.00001L62.5455 4.00001Z"
                fill="url(#paint0_linear_73_4175)"
                fill-opacity="0.7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_73_4175"
                  x1="7.04"
                  y1="3.59413"
                  x2="7.05137"
                  y2="4.97035"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#15BFFD" />
                  <stop offset="1" stop-color="#9C37FD" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="6"
              viewBox="0 0 64 6"
              fill="none"
              className="arrow-svg23"
            >
              <path
                d="M64 3L59 0.113248L59 5.88675L64 3ZM59.6364 2.5L56.7273 2.5L56.7273 3.5L59.6364 3.5L59.6364 2.5ZM53.8182 2.5L50.9091 2.5L50.9091 3.5L53.8182 3.5L53.8182 2.5ZM48 2.5L45.0909 2.5L45.0909 3.5L48 3.5L48 2.5ZM42.1818 2.5L39.2727 2.5L39.2727 3.5L42.1818 3.5L42.1818 2.5ZM36.3636 2.5L33.4545 2.5L33.4545 3.5L36.3636 3.5L36.3636 2.5ZM30.5454 2.5L27.6364 2.5L27.6364 3.5L30.5454 3.5L30.5454 2.5ZM24.7273 2.5L21.8182 2.5L21.8182 3.5L24.7273 3.5L24.7273 2.5ZM18.9091 2.5L16 2.5L16 3.5L18.9091 3.5L18.9091 2.5ZM13.0909 2.5L10.1818 2.5L10.1818 3.5L13.0909 3.5L13.0909 2.5ZM7.27271 2.5L4.36362 2.49999L4.36362 3.49999L7.27271 3.5L7.27271 2.5ZM1.45453 2.49999L4.37114e-08 2.49999L-4.37114e-08 3.49999L1.45453 3.49999L1.45453 2.49999Z"
                fill="url(#paint0_linear_73_4180)"
                fill-opacity="0.7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_73_4180"
                  x1="56.96"
                  y1="2.90587"
                  x2="56.9486"
                  y2="1.52965"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#15BFFD" />
                  <stop offset="1" stop-color="#9C37FD" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="7"
              viewBox="0 0 64 7"
              fill="none"
                 className="arrow-svg24"
            >
              <path
                d="M0 3.5L5 6.38675L5 0.613249L0 3.5ZM4.36364 4L7.27273 4L7.27273 3L4.36364 3L4.36364 4ZM10.1818 4L13.0909 4L13.0909 3L10.1818 3L10.1818 4ZM16 4L18.9091 4L18.9091 3L16 3L16 4ZM21.8182 4L24.7273 4L24.7273 3L21.8182 3L21.8182 4ZM27.6364 4L30.5455 4.00001L30.5455 3.00001L27.6364 3L27.6364 4ZM33.4546 4.00001L36.3636 4.00001L36.3636 3.00001L33.4546 3.00001L33.4546 4.00001ZM39.2727 4.00001L42.1818 4.00001L42.1818 3.00001L39.2727 3.00001L39.2727 4.00001ZM45.0909 4.00001L48 4.00001L48 3.00001L45.0909 3.00001L45.0909 4.00001ZM50.9091 4.00001L53.8182 4.00001L53.8182 3.00001L50.9091 3.00001L50.9091 4.00001ZM56.7273 4.00001L59.6364 4.00001L59.6364 3.00001L56.7273 3.00001L56.7273 4.00001ZM62.5455 4.00001L64 4.00001L64 3.00001L62.5455 3.00001L62.5455 4.00001Z"
                fill="url(#paint0_linear_73_4175)"
                fill-opacity="0.7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_73_4175"
                  x1="7.04"
                  y1="3.59413"
                  x2="7.05137"
                  y2="4.97035"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#15BFFD" />
                  <stop offset="1" stop-color="#9C37FD" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="6"
              viewBox="0 0 64 6"
              fill="none"
              className="arrow-svg25"            >
              <path
                d="M64 3L59 0.113248L59 5.88675L64 3ZM59.6364 2.5L56.7273 2.5L56.7273 3.5L59.6364 3.5L59.6364 2.5ZM53.8182 2.5L50.9091 2.5L50.9091 3.5L53.8182 3.5L53.8182 2.5ZM48 2.5L45.0909 2.5L45.0909 3.5L48 3.5L48 2.5ZM42.1818 2.5L39.2727 2.5L39.2727 3.5L42.1818 3.5L42.1818 2.5ZM36.3636 2.5L33.4545 2.5L33.4545 3.5L36.3636 3.5L36.3636 2.5ZM30.5454 2.5L27.6364 2.5L27.6364 3.5L30.5454 3.5L30.5454 2.5ZM24.7273 2.5L21.8182 2.5L21.8182 3.5L24.7273 3.5L24.7273 2.5ZM18.9091 2.5L16 2.5L16 3.5L18.9091 3.5L18.9091 2.5ZM13.0909 2.5L10.1818 2.5L10.1818 3.5L13.0909 3.5L13.0909 2.5ZM7.27271 2.5L4.36362 2.49999L4.36362 3.49999L7.27271 3.5L7.27271 2.5ZM1.45453 2.49999L4.37114e-08 2.49999L-4.37114e-08 3.49999L1.45453 3.49999L1.45453 2.49999Z"
                fill="url(#paint0_linear_73_4180)"
                fill-opacity="0.7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_73_4180"
                  x1="56.96"
                  y1="2.90587"
                  x2="56.9486"
                  y2="1.52965"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#15BFFD" />
                  <stop offset="1" stop-color="#9C37FD" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="7"
              viewBox="0 0 64 7"
              fill="none"
              className="arrow-svg26"             >
              <path
                d="M0 3.5L5 6.38675L5 0.613249L0 3.5ZM4.36364 4L7.27273 4L7.27273 3L4.36364 3L4.36364 4ZM10.1818 4L13.0909 4L13.0909 3L10.1818 3L10.1818 4ZM16 4L18.9091 4L18.9091 3L16 3L16 4ZM21.8182 4L24.7273 4L24.7273 3L21.8182 3L21.8182 4ZM27.6364 4L30.5455 4.00001L30.5455 3.00001L27.6364 3L27.6364 4ZM33.4546 4.00001L36.3636 4.00001L36.3636 3.00001L33.4546 3.00001L33.4546 4.00001ZM39.2727 4.00001L42.1818 4.00001L42.1818 3.00001L39.2727 3.00001L39.2727 4.00001ZM45.0909 4.00001L48 4.00001L48 3.00001L45.0909 3.00001L45.0909 4.00001ZM50.9091 4.00001L53.8182 4.00001L53.8182 3.00001L50.9091 3.00001L50.9091 4.00001ZM56.7273 4.00001L59.6364 4.00001L59.6364 3.00001L56.7273 3.00001L56.7273 4.00001ZM62.5455 4.00001L64 4.00001L64 3.00001L62.5455 3.00001L62.5455 4.00001Z"
                fill="url(#paint0_linear_73_4175)"
                fill-opacity="0.7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_73_4175"
                  x1="7.04"
                  y1="3.59413"
                  x2="7.05137"
                  y2="4.97035"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#15BFFD" />
                  <stop offset="1" stop-color="#9C37FD" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="6"
              viewBox="0 0 64 6"
              fill="none"
              className="arrow-svg27"             >
              <path
                d="M64 3L59 0.113248L59 5.88675L64 3ZM59.6364 2.5L56.7273 2.5L56.7273 3.5L59.6364 3.5L59.6364 2.5ZM53.8182 2.5L50.9091 2.5L50.9091 3.5L53.8182 3.5L53.8182 2.5ZM48 2.5L45.0909 2.5L45.0909 3.5L48 3.5L48 2.5ZM42.1818 2.5L39.2727 2.5L39.2727 3.5L42.1818 3.5L42.1818 2.5ZM36.3636 2.5L33.4545 2.5L33.4545 3.5L36.3636 3.5L36.3636 2.5ZM30.5454 2.5L27.6364 2.5L27.6364 3.5L30.5454 3.5L30.5454 2.5ZM24.7273 2.5L21.8182 2.5L21.8182 3.5L24.7273 3.5L24.7273 2.5ZM18.9091 2.5L16 2.5L16 3.5L18.9091 3.5L18.9091 2.5ZM13.0909 2.5L10.1818 2.5L10.1818 3.5L13.0909 3.5L13.0909 2.5ZM7.27271 2.5L4.36362 2.49999L4.36362 3.49999L7.27271 3.5L7.27271 2.5ZM1.45453 2.49999L4.37114e-08 2.49999L-4.37114e-08 3.49999L1.45453 3.49999L1.45453 2.49999Z"
                fill="url(#paint0_linear_73_4180)"
                fill-opacity="0.7"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_73_4180"
                  x1="56.96"
                  y1="2.90587"
                  x2="56.9486"
                  y2="1.52965"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#15BFFD" />
                  <stop offset="1" stop-color="#9C37FD" />
                </linearGradient>
              </defs>
            </svg>
            {/* Conditionally render SVGs for odd items */}
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}
              >
                <div style={{ position: "relative" }}>
                  {index % 2 === 0 ? (
                    // Hide this SVG in mobile view
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="410"
                      height="410"
                      viewBox="0 0 183 256"
                      fill="none"
                      className="hide-mobile"
                      style={{
                        position: "absolute",
                        left: "98px",
                        top: "-17px",
                      }}
                    >
                      <path
                        d="M0 3H164C172.837 3 180 10.1634 180 19V237C180 245.837 172.837 253 164 253H0"
                        stroke="url(#paint0_linear_73_4162)"
                        stroke-opacity="0.7"
                        stroke-width="6"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_73_4162"
                          x1="183.152"
                          y1="248.905"
                          x2="-11.5845"
                          y2="242.621"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AB2FFE" />
                          <stop offset="0.96875" stop-color="#40AFFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    // Hide this SVG in mobile view
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="295"
                      height="850"
                      viewBox="0 0 183 256"
                      fill="none"
                      className="hide-mobile"
                      style={{
                        position: "absolute",
                        left: "-15px",
                        top: "-238px",
                      }}
                    >
                      <path
                        d="M183 253L19 253C10.1634 253 3 245.837 3 237L3.00002 19C3.00002 10.1634 10.1635 2.99999 19 2.99999L183 3.00001"
                        stroke="url(#paint0_linear_73_4165)"
                        stroke-opacity="0.7"
                        stroke-width="6"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_73_4165"
                          x1="-0.151731"
                          y1="7.09544"
                          x2="194.585"
                          y2="13.3794"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#AB2FFE" />
                          <stop offset="0.96875" stop-color="#40AFFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  <div className="content">
                    <h3>{item.title}</h3>
                    <span>{item.month}</span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: parseContent(item.description),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
