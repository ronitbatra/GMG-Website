import React, { useState } from 'react';
import './Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    year: '',
    major: '',
    gpa: '',
    experience: '',
    whyJoin: '',
    resume: null,
    agreedToTerms: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked
      });
    } else if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
    
    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    } else if (!formData.email.includes('cornell.edu')) {
      errors.email = 'Please use your Cornell email address';
    }
    
    if (!formData.year) {
      errors.year = 'Please select your year';
    }
    
    if (!formData.major.trim()) {
      errors.major = 'Major is required';
    }
    
    if (!formData.gpa.trim()) {
      errors.gpa = 'GPA is required';
    } else if (isNaN(parseFloat(formData.gpa)) || parseFloat(formData.gpa) < 0 || parseFloat(formData.gpa) > 4.3) {
      errors.gpa = 'Please enter a valid GPA (0-4.3)';
    }
    
    if (!formData.experience.trim()) {
      errors.experience = 'Please describe your relevant experience';
    }
    
    if (!formData.whyJoin.trim()) {
      errors.whyJoin = 'Please tell us why you want to join';
    }
    
    if (!formData.resume) {
      errors.resume = 'Please upload your resume';
    }
    
    if (!formData.agreedToTerms) {
      errors.agreedToTerms = 'You must agree to the terms';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        year: '',
        major: '',
        gpa: '',
        experience: '',
        whyJoin: '',
        resume: null,
        agreedToTerms: false
      });
    } else {
      setFormErrors(errors);
    }
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
                  <h4>Online Application</h4>
                  <p>Complete and submit the online application form with your details, resume, and short essay responses.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Technical Assessment</h4>
                  <p>Selected applicants will receive a technical assessment to evaluate their financial knowledge and analytical skills.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Interviews</h4>
                  <p>Candidates who pass the technical assessment will be invited for interviews with club executives.</p>
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
            <h3>Application Form</h3>
            <p className="form-intro">
              Please complete the form below to apply for membership in the Global Markets Group. 
              All fields are required unless otherwise specified.
            </p>
            
            {isSubmitted ? (
              <div className="submission-success">
                <h4>Application Submitted Successfully!</h4>
                <p>Thank you for your interest in joining Global Markets Group. We have received your application and will review it shortly. If you are selected for the next round, you will be contacted with details about the technical assessment.</p>
                <p>If you have any questions, please contact us at <a href="mailto:cornellhedgefund@cornell.edu">cornellhedgefund@cornell.edu</a>.</p>
              </div>
            ) : (
              <form className="application-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      className={formErrors.firstName ? 'error' : ''}
                    />
                    {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      className={formErrors.lastName ? 'error' : ''}
                    />
                    {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Cornell Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'error' : ''}
                    placeholder="example@cornell.edu"
                  />
                  {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <select 
                      id="year" 
                      name="year" 
                      value={formData.year}
                      onChange={handleChange}
                      className={formErrors.year ? 'error' : ''}
                    >
                      <option value="">Select Year</option>
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                    {formErrors.year && <div className="error-message">{formErrors.year}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="major">Major</label>
                    <input 
                      type="text" 
                      id="major" 
                      name="major" 
                      value={formData.major}
                      onChange={handleChange}
                      className={formErrors.major ? 'error' : ''}
                    />
                    {formErrors.major && <div className="error-message">{formErrors.major}</div>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="gpa">GPA</label>
                    <input 
                      type="text" 
                      id="gpa" 
                      name="gpa" 
                      value={formData.gpa}
                      onChange={handleChange}
                      className={formErrors.gpa ? 'error' : ''}
                      placeholder="e.g., 3.7"
                    />
                    {formErrors.gpa && <div className="error-message">{formErrors.gpa}</div>}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="experience">Relevant Experience</label>
                  <textarea 
                    id="experience" 
                    name="experience" 
                    value={formData.experience}
                    onChange={handleChange}
                    className={formErrors.experience ? 'error' : ''}
                    rows="4"
                    placeholder="Describe any finance, investment, or relevant experience you have."
                  ></textarea>
                  {formErrors.experience && <div className="error-message">{formErrors.experience}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="whyJoin">Why do you want to join Global Markets Group?</label>
                  <textarea 
                    id="whyJoin" 
                    name="whyJoin" 
                    value={formData.whyJoin}
                    onChange={handleChange}
                    className={formErrors.whyJoin ? 'error' : ''}
                    rows="4"
                    placeholder="Tell us why you are interested in joining the club and what you hope to gain from the experience."
                  ></textarea>
                  {formErrors.whyJoin && <div className="error-message">{formErrors.whyJoin}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="resume">Upload Resume (PDF)</label>
                  <input 
                    type="file" 
                    id="resume" 
                    name="resume"
                    onChange={handleChange}
                    className={formErrors.resume ? 'error' : ''}
                    accept=".pdf"
                  />
                  {formErrors.resume && <div className="error-message">{formErrors.resume}</div>}
                </div>
                
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="agreedToTerms" 
                    name="agreedToTerms" 
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className={formErrors.agreedToTerms ? 'error' : ''}
                  />
                  <label htmlFor="agreedToTerms">
                    I agree to the Global Markets Group's application process and confirm that all information provided is accurate and truthful.
                  </label>
                  {formErrors.agreedToTerms && <div className="error-message">{formErrors.agreedToTerms}</div>}
                </div>
                
                <div className="form-actions">
                  <button type="submit" className="submit-button">Submit Application</button>
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
              <p>We evaluate applicants based on their academic background, relevant experience, technical knowledge, and genuine interest in finance and investments.</p>
            </div>
            
            <div className="faq-item">
              <h4>Do I need prior finance experience?</h4>
              <p>While prior experience is valuable, we also consider candidates with strong analytical skills and a demonstrated interest in learning about finance and investment management.</p>
            </div>
            
            <div className="faq-item">
              <h4>What is the time commitment for members?</h4>
              <p>Members typically commit 5-8 hours per week to club activities, including education sessions, stock pitches, and project work.</p>
            </div>
            
            <div className="faq-item">
              <h4>Who should I contact if I have questions?</h4>
              <p>For any questions about the application process or the club, please email us at <a href="mailto:cornellhedgefund@cornell.edu">cornellhedgefund@cornell.edu</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apply; 