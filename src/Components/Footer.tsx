import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer position-relative">
      <div className="footer-contact-card">
        <form className="contact-form gradient-bg">
          <h4 className="form-heading">Let’s work together.</h4>
          <p className="form-subtext">We will get in touch right away</p>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input id="name" type="text" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email*</label>
              <input id="email" type="email" required />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="text" />
            </div>
            <div className="form-group full-width mt-3">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" rows={3}></textarea>
            </div>
          </div>

          <div className="custom-captcha mt-5">
            <input type="checkbox" id="captcha" />
            <label htmlFor="captcha">I'm not a robot</label>
            <div className="captcha-logo mt-5">
              <img src="/recaptcha-logo.png" alt="reCAPTCHA" />
            </div>
          </div>

          <div className="confidential-text mt-5">
            <span className="checkmark ">✔</span> 100% Confidential
          </div>

          {/* Submit button */}
          <div className="form-submit mt-5 ms-2">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="footer-top d-flex flex-column">
        <div className="footer-logo-section">
          <h2 className="footer-logo">
            <span className="highlight">PKB</span>
            <br />
            <small >Certified Practicing Accountant</small>
          </h2>
          <p className="footerPara1" >
            U4/878-882 Wanneroo Road, Wanneroo
            <br />
            <p className="footerPara2" >Phone : (08) 6209 2975</p>
            
          </p>
          <div className="footer-socials">
            <a href="#">
             <img src="/twitter.png"/>
            </a>
            <a href="#">
              <img src="/facebook.png"/>
            </a>
            <a href="#">
               <img src="/linkdin.png"/>
            </a>
          </div>
        </div>
        

        <div className="footer-links-section">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Weekly Demos</li>
              <li>Contact Us</li>
              <li>Report a Bug</li>
              <li>Request a New Feature</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>Help Center</li>
              <li>Information</li>
              <li>Community</li>
              <li>Creator Programme</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Reviews</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Expert IT Brains Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
