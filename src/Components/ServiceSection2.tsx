import React, { useState } from "react";
import ServiceSection2_1 from "./ServiceSection2.1";

const ServiceSection2 = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleSection = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div>
      <div className="col-12 row container m-auto certified-section mt-5">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-section1-left mt-5">
          <div className="d-flex flex-column">
            <h2 className="about-section1-left-heading">Taxation</h2>
            <p className="about-section1-left-para mt-4">
              PKB Accounting Services is a CPA Firm which is engaged in
              providing highly effective business solutions for a wide range of
              companies, partnerships, individuals, companies, SMSF and small
              businesses in Perth Region. We provide highly affordable
              Accounting and Taxation services in North of Perth and does not
              produce long and expensive bills after the completion of a
              particular set of services. The entire cost of the audit or
              accountants service is quoted well in advance so that the clients
              are not under any sort of confusion.
            </p>
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
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src="/tax.jpg" className="w-100" alt="Taxation" />
        </div>
      </div>

      {/* Toggleable Section */}
      {showMore && (
        <div className="pt-3">
          <ServiceSection2_1 />
        </div>
      )}
    </div>
  );
};

export default ServiceSection2;
