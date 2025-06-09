import React, { useState } from "react";
import ServiceSection3_1 from "./ServiceSection3.1";

interface ServiceSection3Props {
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceSection3: React.FC<ServiceSection3Props> = ({ isOpen, onToggle }) => {
  
  const [showMore, setShowMore] = useState(false);
  
    const toggleSection = () => {
      setShowMore((prev) => !prev);
    };
  return (
    <div>
        <div className="col-12 row container m-auto certified-section mt-5">
             <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
          <img src="/view-man-handling-money-funds-wealth-prosperity.jpg" className="w-100" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-section1-left mt-5 ">
          <div className="d-flex flex-column">
            <h2 className="about-section1-left-heading">CFO Services</h2>
            <p className="about-section1-left-para mt-4">
              PKB Accounting Services CFO Services clients are generally
              long-term customersfor whom we provide some or all of the below
              services. We generally spend a lot of time with new customers over
              the first few months developing a financial model of your business
              and creating systems to ensure smooth and simple financial
              management going forward. After this is done we typically work
              between 5 and 20 hours per month for individual clients.<br></br>
              <span className="custom-btn-wrapper mt-4">
              <button onClick={toggleSection} className="filled-btn mt-4">
                <span className="btn-text">
                  {isOpen ? (
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
       
      </div>
       {/* Toggleable Section */}
      {isOpen && (
        <div className="pt-3">
          <ServiceSection3_1/>
        </div>
      )}
    </div>
  )
}

export default ServiceSection3
