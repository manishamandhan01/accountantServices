import React, { useState } from "react";

const ServiceSection4 = () => {
    const [showMore, setShowMore] = useState(false);
    
      const toggleSection = () => {
        setShowMore((prev) => !prev);
      };
  return (
    <div>
      <div className="col-12 row container m-auto certified-section mt-5">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-section1-left mt-5">
          <div className="d-flex flex-column">
            <h2 className="about-section1-left-heading">
              Self Managed Super Funds
            </h2>
            <p className="about-section1-left-para mt-4">
              We can assist clients with: Setting up a SMSF Benefits rollover
              Annual Financial Statements Independent Compliance Audit Fund
              Administration (minutes, reports etc)<br></br>
              <span className="custom-btn-wrapper mt-4">
              <button onClick={toggleSection} className="filled-btn mt-4">
                <span className="btn-text">
                  {showMore ? (
                    <>
                      Know More <img src="downarrow.png" className="arrow"  alt="Down arrow" />
                    </>
                  ) : (
                   <>
                      Know More <img src="uparrow.png"  className="arrow"  alt="Down arrow" />
                    </>
                  )}
                </span>
              </button>
            </span>
            </p>
          </div>
          
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src="/Untitled-design-14.jpg" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection4;
