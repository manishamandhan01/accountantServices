import React from 'react';
import '../Style.css';

const AboutSection2: React.FC = () => {
  return (
    <section className="about-section2  ">
      <div className="about-container container ">
        <h1 className="about-heading ">
          Taxation | Accounting | Bookkeeping |{' '}
          <span className="highlight-blue">Business Startup</span> | Accounting Software
        </h1>
        <div className="about-content   ">
          <p>
            We have a reputation of providing professional services with attention to all places for improvement of your finances.
            Our mission is to ensure your business is on right way of growth and profitability.
          
            When it comes to the right kind of service while keeping your trust intact, we should be definitely given a chance.
         
            The game is all about trying us once and then making the feedback. If you never try out SRM Taxation and Accounting Services,
            you would definitely not know, what we have been doing and in what way we could easily claim that things would definitely
            be done in a better way for you leaving you immensely satisfied too!
         Get in touch with us for all your accounting needs!</p>
        </div>
      </div>
      {/* Curved SVG Bottom */}
     {/* <img className='curveimage' src='Section-2curve.png'/> */}
    </section>
  );
};

export default AboutSection2;
