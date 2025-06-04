import TestimonialsCarousel from "./TestimonialsCarousel";
import HomeServicesSection from "./HomeServiceSelection";

const Home = () => (
    <div>

    
  <div className="hero-container">
    <img className="hero-image" src="/Hero-image.png" alt="Hero" />

    <div className="hero-overlay">
        {/* hero imgage */}
      <div className="hero-text">
        Registered Tax Agent and <br /> ASIC Approved SMSF Auditor 
      </div>
      {/* hero contact form */}

      <div className="hero-right">
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

      {/* hero text */}
    </div>
    <div className="col-12 container">
<p className="col-xl-6 col-lg-12 col-md-12  col-sm-12 col-xs-12 text-center hero-main-text ">PKB Accounting Services is a CPA Firm which is engaged in providing highly effective business solutions 
        for a wide range of  companies, partnerships, individuals, companies, SMSF and small businesses
         in Perth Region.
             We provide highly affordable Accounting and Taxation services in North of Perth 
         and does not produce long and expensivebills after the completion of a particular set of services.
          The entire cost of the audit or accountants service is quoted well in advance so that the clients are
           not under any sort of confusion.</p>
    </div>
    
      

  </div>

  {/* info buttons */}
  <div className="text-center info-button-main-div container d-flex gap-2 flex-wrap  ">
        <button className="info-buttons ">
            <div className="d-flex flex-column text-center">
                <p className="info-buttons-p1">13+</p>
                <p className="info-buttons-p2">Years Of Experience</p>
            </div>
        </button>
        <button className="info-buttons">
            <div className="d-flex flex-column text-center">
                <p className="info-buttons-p1">150+</p>
                <p className="info-buttons-p2">Tax Professionals
</p>
            </div>
        </button>
        <button className="info-buttons">
            <div className="d-flex flex-column text-center">
                <p className="info-buttons-p1">75+</p>
                <p className="info-buttons-p2">Clients Served Nationwide</p>
            </div>
        </button>
        <button className="info-buttons">
            <div className="d-flex flex-column text-center">
                <p className="info-buttons-p1">1100+</p>
                <p className="info-buttons-p2">Tax Returns Filed</p>
            </div>
        </button>
        <button className="info-buttons">
            <div className="d-flex flex-column text-center">
                <p className="info-buttons-p1">3.0M+</p>
                <p className="info-buttons-p2">Documents Processed</p>
            </div>
        </button>
    </div>

     {/* our services */}
     <div className="our-services-top-main-div container">
        <div className="d-flex flex-row justify-content-between col-12 our-services-top">
            <p className="our-services-top-p">Our Services</p>
             <button className="our-services-top-button" >Schedule a Call <span style={{ marginLeft: '8px' }}>→</span> </button>

        </div>
        <div>

        </div>
     </div>
  
  {/* service card */}
  <div className="d-flex flex-row service-card-main-div justify-content-center">
    <div className="d-flex flex-column service-card-row1">
  {/* card1 */}
<div className="service-card service-card1-border">
  <div className="icon-container">
    <img src="/pepicons-pop_people-circle.png" alt="CFO Icon" className="service-icon" />
  </div>
  <h3 className="service-title">CFO & Advisory<br />Services</h3>
  <p className="service-description">
    We provide business owners with financial muscle to help them manage not only their accounting records but the future of their business.
  </p>
</div>
{/* card2 */}
 <div className="service-card service-card2-border">
  <div className="icon-container">
    <img src="/hugeicons_message-programming (1).png" alt="CFO Icon" className="service-icon" />
  </div>
  <h3 className="service-title">Bookkeeping & <br /> Accounting</h3>
  <p className="service-description">
   We provide fixed fees and ala carte bookkeeping services for Xero, MYOB and Quickbooks to suit your budget and your accounting needs.
  </p>
</div>
 
  </div>
   <div className="d-flex flex-column service-card-row2">
  {/* card1 */}
<div className="service-card service-card1-border">
  <div className="icon-container">
    <img src="/mdi_bank.png" alt="CFO Icon" className="service-icon" />
  </div>
  <h3 className="service-title">Accounting &<br></br>Reporting Services
</h3>
  <p className="service-description">
    We empower our clients with management reports to help them make better strategic decisions.
     We work across all industries and understand the underlying drivers of change.

  </p>
</div>
{/* card2 */}
 <div className="service-card service-card2-border">
  <div className="icon-container">
    <img src="/mdi_graph-bar.png" alt="CFO Icon" className="service-icon" />
  </div>
  <h3 className="service-title">Preparing Business<br></br>Plans</h3>
  <p className="service-description">
  We work across all industries and understand the underlying drivers of change. We’ll support and motivate from the ground up to make the change
  </p>
</div>
 
  </div>
   <div className="d-flex flex-column">
  {/* card1 */}
<div className="service-card  service-card1-border">
  <div className="icon-container">
    <img src="/Group.png" alt="CFO Icon" className="service-icon" />
  </div>
  <h3 className="service-title">Debt Follow Up<br></br>Services</h3>
  <p className="service-description">
   Too busy working on your operations – forget about chasing your debtors with our results focused debt follow up services – Minez !
  </p>
</div>
{/* card2 */}
 <div className="service-card service-card2-border">
  <div className="icon-container">
    <img src="/fluent-mdl2_functional-manager-dashboard.png" alt="CFO Icon" className="service-icon" />
  </div>
  <h3 className="service-title">Cash Flow<br></br>Management</h3>
  <p className="service-description">
Our experience team will develop your cash flow projections using your business drivers and activity to build an accurate forecast  </p>
</div>
 
  </div>
  </div>
  
     
<HomeServicesSection/>

<div className="map-container">
  <iframe
    title="Google Maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0934704086837!2d144.96305791532193!3d-37.81627997975137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f2334f%3A0x5045675218ce7e33!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1589609859079!5m2!1sen!2sau"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
<div>
</div>
    <TestimonialsCarousel/>


    </div>

    
);

export default Home;
