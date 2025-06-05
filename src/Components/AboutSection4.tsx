import React from 'react';
import '../Style.css';

const tabs = [
  'Australia Taxation Office',
  'Self Managed Super Fund',
  'Deductions - Individual Tax Claim',
];

const cards = Array.from({ length: 10 }, (_, i) => ({
  title: 'Australian Taxation Office',
  description:
    'The Australian Taxation Office is an Australian statutory agency and the principal revenue collection body for the Australian Government.',
  icon: '/linkimage.png', // Replace with actual path
}));

const AboutSection4: React.FC = () => {
  return (
    <section className="about-section4 container">
      <h2 className="about4-heading">All your useful links in one place</h2>
      <button className="about4-button">Know More</button>

      <div className="about4-tabs">
        {tabs.map((tab, index) => (
          <div key={index} className="about4-tab">
            {tab}
          </div>
        ))}
      </div>

      <div className="about4-grid">
        {cards.map((card, index) => (
          <div key={index} className="about4-card">
            <div className="about4-card-title">{card.title}</div>
            <img src={card.icon} alt="icon" className="about4-card-icon" />
            <p className="about4-card-text">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection4;
