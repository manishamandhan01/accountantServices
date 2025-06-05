import React from "react";
import "../Style.css";

const AboutSection5: React.FC = () => {
  return (
    <section className="container">
        <div className=" about-section5-container " >

      
      <div className="about-section5-left">
        <div className="about-section5-label"> ABOUT US</div>
      </div>

      <div className="about-section5-right">
        <p className="about-section5-paragraph">
          AVS Advisors has answers to all of your tax and financial questions.
          Our experts have years of taxation, accounting and consulting
          experience and will support you in all aspects of business and
          financial management, from the everyday to the complex tasks. Our
          qualified and trained team are committed to provide our clients with
          timely, professional service of the highest quality. With our
          extensive and careful planning AVS Advisors provides a total business
          solution that helps clients take control of their finances and achieve
          their financials goals.
        </p>
        <div className="d-flex flex-row about-section5-right-bottom ">
          <div className="about-section5-lists">
            <ul className="about-section5-list">
              <li>Team of experts under one roof.</li>
              <li>
                We firmly believe in honesty, integrity, experience and client
                trust.
              </li>
              <li>Qualified and experienced</li>
              <li>Customer service is the top priority.</li>
              <li>
                Make things simpler and less complicated to achieve the desired
                goal.
              </li>
            </ul>
          </div>
          <div className="about-section5-lists ">
            <ul className="about-section5-list">
              <li>Educating the clients to manage their daily tasks.</li>
              <li>Competitive pricing</li>
              <li>
                No-sudden bills. Define the scope of work and give fix quote.
              </li>
              <li>After hours availability.</li>
              <li>Helpful and kind.</li>
            </ul>
          </div>
        </div>
      </div>  </div>
    </section>
  );
};

export default AboutSection5;
