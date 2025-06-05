import React from 'react';
import '../Style.css';

const AboutSection3: React.FC = () => {
  return (
    <section className="about-section3   ">
      <div className="about3-container row m-auto col-12 d-flex flex-row container ">
        <div className="about3-image col-xl-6 col-lg-6 col-md-12 col-sm-12 ">
          <img src="/section3Image.png" alt="Tax and Superannuation" />
        </div>
        <div className="about3-content col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <h2 className="about3-title">Tax And Superannuation</h2>
          <ul className="about3-list">
            <li>
              <div className="about3-icon-circle">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <span>Tax Returns</span>
            </li>
            <li>
              <div className="about3-icon-circle">
                <i className="fas fa-plane"></i>
              </div>
              <span>Self-Managed Super Fund</span>
            </li>
            <li>
              <div className="about3-icon-circle">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <span>Tax Planning</span>
            </li>
            <li>
              <div className="about3-icon-circle">
                <i className="fas fa-chart-bar"></i>
              </div>
              <span>BAS & PAYG</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection3;
