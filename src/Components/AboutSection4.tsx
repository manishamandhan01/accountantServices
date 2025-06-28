import React from 'react';
import '../Style.css';

const cards = [
  {
    title: 'Australian Taxation Office (ATO)',
    description: 'Official website of the ATO, the main revenue collection body of the Australian Government.',
    iconClass: 'fas fa-university',
    link: 'https://www.ato.gov.au/',
  },
  {
    title: 'Self Managed Super Fund (SMSF)',
    description: 'Guidance from ATO on how to start and manage a self-managed super fund.',
    iconClass: 'fas fa-briefcase',
    link: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/self-managed-super-funds-smsf/before-you-start-an-smsf',
  },
  {
    title: 'ATO Tools & Calculators',
    description: 'Access ATO’s official calculators and tools to manage your tax, super and business obligations.',
    iconClass: 'fas fa-calculator',
    link: 'https://www.ato.gov.au/Calculators-and-tools?sorttype=SortByTopic',
  },
  {
    title: 'CPA Australia',
    description: 'One of the world’s largest accounting bodies, providing accounting resources and membership.',
    iconClass: 'fas fa-building',
    link: 'https://www.cpaaustralia.com.au/cps/rde/xchg',
  },
  {
    title: 'APESB',
    description: 'Accounting Professional & Ethical Standards Board – developer of professional and ethical standards.',
    iconClass: 'fas fa-file-signature',
    link: 'https://www.apesb.org.au/',
  },
  {
    title: 'AUASB',
    description: 'Australian Auditing and Assurance Standards Board responsible for developing auditing standards.',
    iconClass: 'fas fa-clipboard-list',
    link: 'https://www.auasb.gov.au/Home.aspx',
  },
  {
    title: 'ASIC',
    description: 'Australian Securities and Investments Commission – regulator of corporate, markets and financial services.',
    iconClass: 'fas fa-user-shield',
    link: 'https://www.asic.gov.au/',
  },
  {
    title: 'Superannuation Pathways',
    description: 'ATO’s guide to superannuation, helping individuals understand their super options.',
    iconClass: 'fas fa-balance-scale',
    link: 'https://www.ato.gov.au/individuals/pathway.aspx?pc=001/002/064&alias=super',
  },
  {
    title: 'ASX (Australian Securities Exchange)',
    description: 'Official site of the ASX, where you can learn about investing and financial markets in Australia.',
    iconClass: 'fas fa-chart-line',
    link: 'https://www.asx.com.au/',
  },
  {
    title: 'Legal Practice Board of WA',
    description: 'Regulates the legal profession in Western Australia and ensures professional standards.',
    iconClass: 'fas fa-gavel',
    link: 'https://www.lpbwa.org.au/',
  },
];

const AboutSection4: React.FC = () => {
  return (
    <section className="about-section4 container">
      <h2 className="about4-heading">All your useful links in one place</h2>
      <button className="about4-button">Know More</button>

      {/* <div className="about4-tabs">
        {['Australia Taxation Office', 'Self Managed Super Fund', 'Deductions - Individual Tax Claim'].map(
          (tab, index) => (
            <div key={index} className="about4-tab">
              {tab}
            </div>
          )
        )}
      </div> */}

      <div className="about4-grid mt-5">
        {cards.map((card, index) => (
          <div key={index} className="about4-card">
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="about4-card-title"
            >
              {card.title}
            </a>
            <div className="about4-card-icon">
              <i className={card.iconClass}></i>
            </div>
            <p className="about4-card-text">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection4;
