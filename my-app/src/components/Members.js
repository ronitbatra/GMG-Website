import React, { useState } from 'react';
import './Members.css';
import JackCooperImage from '../assets/Jack_cooper.jpg';
import ChristianMinImage from '../assets/Christian_min.jpg';
import ArtinSaadatImage from '../assets/Artin_saadat.jpg';
const Members = () => {
  const [selectedYear, setSelectedYear] = useState('all');

  const members = [
    { id: 1, name: 'Jack Cooper', year: '2nd Year', major: 'Finance', role: 'Analyst', avatar: JackCooperImage },
    { id: 2, name: 'Christian Min', year: '2nd Year', major: 'Mathematics', role: 'Analyst', avatar: ChristianMinImage },
    { id: 3, name: 'Artin Saadat', year: '1st Year', major: 'Computer Science & Finance', role: 'Associate', avatar: ArtinSaadatImage },
    { id: 4, name: 'Tejus Lakshminarayan', year: '2nd Year', major: 'Finance & History', role: 'Analyst'},
  ];

  const filtered = members.filter(m => 
    selectedYear === 'all' || m.year === selectedYear
  );

  return (
    <div className="members-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Members</h1>
        </div>
      </div>

      <section className="members-section">
        <div className="container">
          <div className="section-intro">
            <h2>Meet Our Team</h2>
            <p>
              Global Markets Group members are selected through a competitive application 
              process. Our members come from diverse academic backgrounds but share a common 
              passion for finance and investment management. Members collaborate on research, 
              stock pitches, and portfolio management while developing valuable skills for 
              careers in finance.
            </p>
          </div>

          <div className="member-filters">
            <div className="filter-group">
              <label>Filter by Year:</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="all">All Years</option>
                <option value="4th Year">4th Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="1st Year">1st Year</option>
              </select>
            </div>
          </div>

          <div className="members-grid">
            {filtered.map(member => (
              <div className="member-card" key={member.id}>
                <div className="member-avatar">
                  {member.avatar ? (
                    <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="avatar-placeholder">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-details">
                    <span className="member-year">{member.year}</span> • 
                    <span className="member-major">{member.major}</span>
                  </p>
                  <p className="member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members; 