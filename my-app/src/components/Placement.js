import React from 'react';
import './Placement.css';
import GoldmanSachsImage from '../assets/Goldman_sachs.jpg';
import MorganStanleyImage from '../assets/Morgan_stanley.jpg';
import JPMorganImage from '../assets/JPMorgan.jpg';
import BankOfAmericaImage from '../assets/Bank_of_america.jpg';
import EvercoreImage from '../assets/Evercore.jpg';
import HoulihanLokeyImage from '../assets/Houlihan_lokey.jpg';
import RothschildImage from '../assets/Rothschild.jpg';
const Placement = () => { 
  // Sample data for placements - in a real app, this would come from an API or database
  const companies = [
    {
      category: 'Investment Banking',
      logos: [
        { name: 'Goldman Sachs', logo: GoldmanSachsImage },
        { name: 'Morgan Stanley', logo: MorganStanleyImage },
        { name: 'J.P. Morgan', logo: JPMorganImage },
        { name: 'Bank of America', logo: BankOfAmericaImage },
        { name: 'Evercore', logo: EvercoreImage },
        { name: 'Houlihan Lokey', logo: HoulihanLokeyImage },
        { name: 'Rothschild', logo: RothschildImage },
      ]
    },
    
  ];

  return (
    <div className="placement-page">
      <div className="page-header">
        <div className="container">
          <h1>Placement</h1>
        </div>
      </div>

      <section className="placement-section">
        <div className="container">
          <div className="section-intro">
            <h2>Our Success Stories</h2>
            <p>
              Global Markets Group has a strong track record of placing members in prestigious 
              finance and consulting firms. Our comprehensive training program, mentorship, and 
              networking opportunities prepare our members for successful careers in finance and 
              related fields.
            </p>
          </div>

          <div className="placement-categories">
            {companies.map((category, catIndex) => (
              <div className="placement-category" key={catIndex}>
                <h3>{category.category}</h3>
                <div className="company-grid">
                  {category.logos.map((company, companyIndex) => (
                    <div
                      className="company-card"
                      key={companyIndex}
                      style={{ animationDelay: `${companyIndex * 0.1}s` }}
                    >
                      <div className="company-logo">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="company-logo-image"
                        />
                      </div>
                      <div className="company-info">
                        <h4>{company.name}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="placement-testimonials">
            <h3>Testimonials from Alumni</h3>
            <div className="testimonial-grid">
              <div className="testimonial">
                <p>
                  "The financial modeling and valuation skills I learned through Cornell Hedge Fund 
                  Club were instrumental in helping me secure my role in investment banking at Goldman Sachs."
                </p>
                <div className="testimonial-author">
                  <p className="author-name">- Michael L.</p>
                  <p className="author-position">Analyst, Goldman Sachs</p>
                </div>
              </div>
              
              <div className="testimonial">
                <p>
                  "Being part of the club's investment team gave me real-world experience in conducting 
                  company research and building investment theses, which helped me stand out during my 
                  BlackRock interviews."
                </p>
                <div className="testimonial-author">
                  <p className="author-name">- Samantha T.</p>
                  <p className="author-position">Associate, BlackRock</p>
                </div>
              </div>
              
              <div className="testimonial">
                <p>
                  "The alumni network and industry connections I developed through the club played a 
                  crucial role in helping me navigate the recruiting process and secure my dream job in private equity."
                </p>
                <div className="testimonial-author">
                  <p className="author-name">- Jason K.</p>
                  <p className="author-position">Analyst, Blackstone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Placement; 