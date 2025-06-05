import AboutSection2 from "../Components/AboutSection2";
import AboutSection3 from "../Components/AboutSection3";
import AboutSection4 from "../Components/AboutSection4";
import AboutSection5 from "../Components/AboutSection5";
import TestimonialsCarousel from "./TestimonialsCarousel";


const About = () => (
  <div className="">

    {/* section 1 */}
    <div className="col-12 row container m-auto certified-section
     ">
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-section1-left ">
        <div className="d-flex flex-column">
          <h2 className="about-section1-left-heading">
            Certified Practising <span>Accountants</span>
          </h2>
          <p className="about-section1-left-para mt-4">
            SRM Advisors, we have the answers to all of your tax and financial
            questions. Our experts have years of Taxation, Accounting, and
            consulting experience and will support you in all aspects of
            business and financial management, from everyday to complex tasks.
            Our qualified and trained team is committed to providing our clients
            with timely, professional service of the highest quality. With our
            extensive and careful planning, SRM Advisors provides a total
            business solution that helps clients take control of their finances
            and achieve their financial goals.<br>
            </br>
            <span><button className="filled-btn mt-4">Contact Us</button></span>
          </p>
          
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <img src="/person.png" className="w-100" />
      </div>
    </div>
     {/* section 1 */}



    {/* section 2 */}
    {/* <div className="service-section-2-image">
      <img src="ServicesSection-2.png" />
    </div> */}
     {/* section 2 */}
     <AboutSection2/>
     <AboutSection3/>
     <AboutSection4/>
     <AboutSection5/>
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
export default About;
