import ServiceSection2 from "../Components/ServiceSection2";
import ServiceSection3 from "../Components/ServiceSection3";
import ServiceSection4 from "../Components/ServiceSection4";
import TestimonialsCarousel from "../Components/TestimonialsCarousel";

const Services = () => (
  <div>
    <div className="col-12 row container m-auto certified-section ">
      <div className="col-xl-12 col-lg-6 col-md-12 col-sm-12 about-section1-left text-center ">
        <div className="d-flex flex-column">
          <h2 className="service-section1-heading">
            Empowering Your Business{" "}
            <h2 className="service-section1-heading">with Expert Taxation</h2>
            <h2 className="service-section1-heading">Services</h2>
          </h2>
          <p className="about-section1-left-para mt-4">
            Simplify your tax processes and ensure full compliance with tailored
            accounting solutions. From tax planning and{" "}
            <p className="about-section1-left-para ">
              filing to GST, income tax, and advisory services — our experienced
              team is here to support individuals, businesses,
              <p className="about-section1-left-para ">
                {" "}
                and professionals with reliable and efficient tax expertise.
              </p>
            </p>
            <span className="custom-btn-wrapper mt-4">
              <button className="custom-get-started-btn">
                <span className="btn-text">Get Started</span>
                <span className="btn-icon">
                  <img src="/Right Button.png" />
                </span>
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div className="pt-5">
 <ServiceSection2 />
    </div>
    <div className="pt-5"> <ServiceSection3 /></div>
    <div className="pt-5"><ServiceSection4 /></div>
    
    <img className="curveimage" src="BackgroundLeaf.png" />
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
    <div></div>
    <TestimonialsCarousel />
  </div>
);

export default Services;
