import React from 'react'
import TestimonialsCarousel from '../Components/TestimonialsCarousel'


const ContactUs = () => {
  return (
    <div>
         <div>

    
  <div className="hero-container">
    <img className="hero-image" src="/contact.png" alt="Hero" />

    <div className="hero-overlay">
        {/* hero imgage */}
      <div className="contact-hero-text">
        Contact Us <br /> 
        <br/>
        <br/>
      </div>
      <div className="contact-hero-text2"> Let’s Start A Conversation 
      </div>

      

      
    </div>
   
      


    
      
</div>
 <div className="col-12 row container m-auto certified-section conatct-section2">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src="/building-1.jpg" className="w-100 h-100" alt="Taxation" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <img src="/contactimage.png" className="w-100" alt="Taxation" />
        </div>
      </div>
  </div>

 

  
 
  
     


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
  )
};

export default ContactUs