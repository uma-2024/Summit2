import React from "react";

const ProjectCard = ({ img }) => {
  return (
    <div>
      <div className="bg-card  rounded-lg shadow-lg d-flex flex-col">
  
        <img className=" max-h-40 p-5" src={img} style={{width:"40%", margin:"0 auto", borderRadius:'50%'}} />
        <div className="p-4 d-flex flex-col align-items-center">
          <div >
            <h3 className="text-white text-lg mb-2">Coming Soon</h3>
            <div className="flex gap-2 mb-5 justify-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <circle
                    cx="16.5"
                    cy="16.97"
                    r="16.25"
                    stroke="url(#paint0_linear_103_293)"
                    stroke-width="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_293"
                      x1="14.1088"
                      y1="2.18081"
                      x2="33.515"
                      y2="3.03944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="gray" />
                      <stop offset="1" stop-color="gray" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <circle
                    cx="16.5"
                    cy="16.97"
                    r="16.25"
                    stroke="url(#paint0_linear_103_293)"
                    stroke-width="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_293"
                      x1="14.1088"
                      y1="2.18081"
                      x2="33.515"
                      y2="3.03944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="gray" />
                      <stop offset="1" stop-color="gray" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="34"
                  viewBox="0 0 33 34"
                  fill="none"
                >
                  <circle
                    cx="16.5"
                    cy="16.97"
                    r="16.25"
                    stroke="url(#paint0_linear_103_293)"
                    stroke-width="0.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_103_293"
                      x1="14.1088"
                      y1="2.18081"
                      x2="33.515"
                      y2="3.03944"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="gray" />
                      <stop offset="1" stop-color="gray" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between items-center text-white mb-4 gap-1">
            <div className="text-center border border-gray p-1">
              <span style={{ fontFamily: "fontbold" }} className="text-lg">
                BTC
              </span>{" "}
              <br />
              <span className="text-xs">Total Raised</span>
            </div>
            <div className="text-center border border-gray p-1">
              <span style={{ fontFamily: "fontbold" }} className="text-lg">
                ETH
              </span>{" "}
              <br />
              <span className="text-xs">Total Raised</span>
            </div>
            <div className="text-center border border-gray p-1">
              <span style={{ fontFamily: "fontbold" }} className="text-lg">
                BNB
              </span>{" "}
              <br />
              <span className="text-xs">Total Raised</span>
            </div>
          </div> */}
          <button className="bg-[gray]  text-white py-2 px-10 w-40  transition duration-300 explore-button">
            Explore Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
