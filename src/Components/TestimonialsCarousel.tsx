import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Mikaily Garayev',
    role: 'Product Designer',
    text: 'The tech team brought our ideas to life with an app that transformed our customer experience.',
    rating: 5,
    avatar: '/Ellipse 827.png',
  },
  {
    name: 'Mikaily Garayev',
    role: 'UX Designer',
    text: 'We cut manual tasks by 60% with their process automation solution. Highly recommended.',
    rating: 5,
    avatar: '/Ellipse 827.png',
  },
  {
    name: 'Mikaily Garayev',
    role: 'Product Designer',
    text: 'Great support and consistent delivery from our go-to IT partner.',
    rating: 5,
    avatar: '/Ellipse 827.png',
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true, // Scroll from right to left
    arrows: false,
  };

  return (
    <div className="testimonial-wrapper">
  <h2 className="testimonial-heading">Get to Know What Our<br></br> Clients Think</h2>
  <div className="testimonial-marquee">
    <div className="testimonial-track">
      {/* Repeat testimonials enough to loop smoothly */}
      {[...testimonials, ...testimonials].map((t, i) => (
        <div className="testimonial-card" key={i}>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">“{t.text}”</p>
          <div className="testimonial-user">
            <img src={t.avatar} alt={t.name} className="avatar" />
            <div>
              <strong>{t.name}</strong>
              <div className="role">{t.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default TestimonialsCarousel;
