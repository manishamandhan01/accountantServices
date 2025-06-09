import React from "react";
import ServiceSection2_1 from "./ServiceSection2.1";


interface ServiceSection2Props {
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceSection2: React.FC<ServiceSection2Props> = ({ isOpen, onToggle }) => {
  return (
    <div>
      <div className="col-12 row container m-auto certified-section mt-5">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-section1-left mt-5">
          <div className="d-flex flex-column">
            <h2 className="about-section1-left-heading">Taxation</h2>
            <p className="about-section1-left-para mt-4">
              PKB Accounting Services is a CPA Firm...
            </p>
            <span className="custom-btn-wrapper mt-4">
              <button onClick={onToggle} className="filled-btn mt-4">
                <span className="btn-text">
                  {isOpen ? (
                    <>
                      Know More <img src="downarrow.png" className="arrow" alt="Down arrow" />
                    </>
                  ) : (
                    <>
                      Know More <img src="uparrow.png" className="arrow" alt="Up arrow" />
                    </>
                  )}
                </span>
              </button>
            </span>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src="/tax.jpg" className="w-100" alt="Taxation" />
        </div>
      </div>

      {isOpen && (
        <div className="pt-3">
          <ServiceSection2_1 />
        </div>
      )}
    </div>
  );
};

export default ServiceSection2;
