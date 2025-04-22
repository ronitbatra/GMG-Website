import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import rotundaVideo from '../assets/Rotunda.mp4';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src={rotundaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h2>UVA's leading global long-short equity fund</h2>
          <h1>Global Markets Group</h1>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          
          <div className="about-cards">
            <div className="about-card">
              <h3>Professional Development</h3>
              <p>
              GMG shapes disciplined, well-rounded investors through a structured, semester-long probation program that pairs new analysts with senior mentors. Regular skill-building workshops sharpen members' abilities in valuation, risk management, and global macro analysis while fostering a collaborative, high-performance culture.
              </p>
              <Link to="/placement" className="card-link">Placement</Link>
            </div>

            <div className="about-card">
              <h3>Stock Pitches</h3>
              <p>
              Managing roughly $20k in long-short equity AUM, the fund runs live pitch cycles in the Americas, EMEA, and APAC. Analysts originate ideas, build full models, and defend their theses before the Investment Committee—driving portfolio decisions that balance upside in emerging markets with downside protection in developed ones.
              </p>
              <Link to="/what-we-do" className="card-link">Our Pitches</Link>
            </div>

            <div className="about-card">
              <h3>Education</h3>
              <p>
                Frequent primers, guest speaker sessions, and market debriefs keep members current on international trends, sector dynamics, and best practices in equity research. This continuous learning environment ensures that every pitch—and every investment—reflects rigorous, global-minded analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to join us?</h2>
          <Link to="/apply" className="cta-button">Apply Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 