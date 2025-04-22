import React from 'react';
import './WhatWeDo.css';

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="page-header">
        <div className="container">
          <h1>What We Do</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="container">
          <div className="section-content">
            <h2>Investment Activities</h2>
            <p>
              Global Markets Group is dedicated to providing members with hands-on experience 
              in investment management and financial markets. Our club activities focus on:
            </p>
            
            <div className="activity-cards">
              <div className="activity-card">
                <h3>Stock Pitches</h3>
                <p>
                  Every semester, each of our members form groups of around 2 associates and 3 analysts and pitch a stock to the entire club. These stocks 
                  are then voted on by the associate investment committee to decide if the stock should be added to our portfolio. 
                  These pitches help members develop their skills and provide investment ideas for our portfolio.
                </p>
              </div>
              
              <div className="activity-card">
                <h3>Fund Meetings</h3>
                <p>
                  Every week, the fund meets to discuss the latest news and developments in the market around one part of the world. 
                  The regions are Americas, EMEA, and APAC.
                </p>
              </div>
              
              <div className="activity-card">
                <h3>Associate Investment Comittee</h3>
                <p>
                  Members of the associate investment committee are responsible for overseeing the fund's activities and making investment decisions. 
                  Every week, the associate investment committee meets to discuss the current portfolio and make decisions on which stocks to buy, sell, or hold.
                </p>
              </div>
            </div>
          </div>
          
          <div className="section-content">
            <h2>Educational Initiatives</h2>
            <p>
              We place strong emphasis on education and professional development to prepare our members 
              for success in finance and investment careers:
            </p>
            
            <div className="activity-cards">
              <div className="activity-card">
                <h3>New Member Education</h3>
                <p>
                  Our rigorous 10-week new member education process covers fundamental concepts in 
                  finance, accounting, and investment analysis. Topics include financial statement 
                  analysis, valuation methodologies, and investment strategie   s.
                </p>
              </div>
              
              <div className="activity-card">
                <h3>Mcintire Application Help</h3>
                <p>
                  Dedicated help is available for members who are applying to the McIntire School of Commerce. 
                  This includes help with the application essays and the interview process.
                </p>
              </div>
              
              <div className="activity-card">
                <h3>Guest Speakers</h3>
                <p>
                  We regularly invite industry professionals, professors, and alumni working in finance to share their 
                  experiences and insights. These sessions provide valuable networking opportunities and 
                  real-world perspectives on careers in finance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="section-content">
            <h2>Recent Stock Pitches</h2>
            <p>
              Below are some of our recent stock pitches that were presented to the club:
            </p>
            
            <div className="stock-pitches">
              <div className="stock-pitch">
                <h3>NVIDIA (NVDA)</h3>
                <p>Growth in AI and data center markets</p>
              </div>
              
              <div className="stock-pitch">
                <h3>Microsoft (MSFT)</h3>
                <p>Cloud services and enterprise software dominance</p>
              </div>
              
              <div className="stock-pitch">
                <h3>Costco (COST)</h3>
                <p>Retail resilience and membership model strength</p>
              </div>
              
              <div className="stock-pitch">
                <h3>Visa (V)</h3>
                <p>Payment processing network and global expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo; 