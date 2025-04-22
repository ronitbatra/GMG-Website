import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the message to a server here
    console.log('Message submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="apply-page">
      <div className="page-header">
        <div className="container">
          <h1>Apply</h1>
        </div>
      </div>

      <section className="application-section">
        <div className="container">
          <div className="section-intro">
            <h2>Join Our Team</h2>
            <p>
              Global Markets Group accepts applications at the beginning of each semester. 
              Prospective members go through a competitive selection process that evaluates academic 
              background, relevant experience, and passion for finance and investment management.
            </p>
          </div>

          <div className="application-process">
            <h3>Application Process</h3>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Information Sessions & Club Fair</h4>
                  <p>Attend our information sessions and meet us at the club fair to learn more about the club and our application process.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Online Application</h4>
                  <p>Complete and submit the online application form with your details, resume, and short essay responses.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Interviews</h4>
                  <p>Candidates who are selected after the online application will be invited for interviews with club executives.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Decision</h4>
                  <p>Final decisions will be communicated to all candidates who completed the interview process.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="application-form-container">
            <h3>Contact Us</h3>
            <p className="form-intro">
              Have questions about joining Global Markets Group? Feel free to reach out to us using the form below.
            </p>
            
            {isSubmitted ? (
              <div className="submission-success">
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for contacting Global Markets Group. We have received your message and will get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group name-group">
                  <label>Name <span>(required)</span></label>
                  <div className="name-inputs">
                    <input 
                      type="text" 
                      name="firstName" 
                      placeholder="First Name" 
                      required 
                      value={formData.firstName} 
                      onChange={handleChange} 
                    />
                    <input 
                      type="text" 
                      name="lastName" 
                      placeholder="Last Name" 
                      required 
                      value={formData.lastName} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email <span>(required)</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Subject <span>(required)</span></label>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    required 
                    value={formData.subject} 
                    onChange={handleChange} 
                  />
                </div>
                
                <div className="form-group">
                  <label>Message <span>(required)</span></label>
                  <textarea 
                    name="message" 
                    placeholder="Message" 
                    required 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows="4"
                  ></textarea>
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </form>
            )}
          </div>

          <div className="application-faq">
            <h3>Frequently Asked Questions</h3>
            
            <div className="faq-item">
              <h4>When can I apply to join?</h4>
              <p>Applications are open at the beginning of each semester, typically during the first two weeks of classes.</p>
            </div>
            
            <div className="faq-item">
              <h4>What are you looking for in applicants?</h4>
              <p>We evaluate applicants based on their academic background and genuine interest in finance and investments.</p>
            </div>
            
            <div className="faq-item">
              <h4>Do I need prior finance experience?</h4>
              <p>While prior experience is valuable, we also consider candidates with strong analytical skills and a demonstrated interest in learning about finance and investment management.</p>
            </div>
            
            <div className="faq-item">
              <h4>What is the time commitment for members?</h4>
              <p>Members typically commit 8-10 hours per week to club activities, including fund meetings, general body meetings, and project work.</p>
            </div>
            
            <div className="faq-item">
              <h4>Who should I contact if I have questions?</h4>
              <p>For any questions about the application process or the club, please email us at <a href="mailto:globalmarketsgroupatuva@gmail.com">globalmarketsgroupatuva@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply; 