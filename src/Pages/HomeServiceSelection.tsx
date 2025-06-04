import React, { useEffect, useRef } from 'react';

const HomeServicesSection = () => {
 const refs = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
  entry.target.classList.add('visible');
} else {
  entry.target.classList.remove('visible');
}

        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach(el => el && observer.observe(el));

    return () => {
      refs.current.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <div className="services-container">
      <h2 className="section-heading">All your needs in one place</h2>

      <div className="d-flex flex-column">
        <div className="services-grid">
          <div className="service-item" ref={(el) => {
    refs.current[0] = el;
  }}>
            <img src="/Untitled-design-11.jpg" alt="Taxation" />
            <div className="service-label">Taxation</div>
          </div>
          <div className="service-item"  ref={(el) => {
    refs.current[1] = el;
  }}>
            <img src="/Untitled-design-14.jpg" alt="Accounting" />
            <div className="service-label">Accounting</div>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-item" ref={(el) => {
    refs.current[2] = el;
  }}>
            <img
              src="/bussiness-people-working-team-office.jpg"
              alt="CFO Services"
            />
            <div className="service-label">CFO Services</div>
          </div>
          <div className="service-item"  ref={(el) => {
    refs.current[3] = el;
  }}>
            <img
              src="/view-man-handling-money-funds-wealth-prosperity.jpg"
              alt="Self- Managed Super Funds"
            />
            <div className="service-label">Self- Managed Super Funds</div>
          </div>
        </div>
      </div>

      <div className="service-buttons">
        <button className="filled-btn">Our Services</button>
        <button className="outlined-btn">Call Us: (123) 456-7890</button>
      </div>
    </div>
  );
};

export default HomeServicesSection;
