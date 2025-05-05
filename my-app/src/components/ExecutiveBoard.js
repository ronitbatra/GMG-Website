import React from 'react';
import './ExecutiveBoard.css';
import ColinHerbertImage from '../assets/Colin_herbert.jpg';
import SaahasGowdaImage from '../assets/Saahas_gowda.jpg';
import SpencerHoweImage from '../assets/Spencer_howe.jpg';
import PaulGallagherImage from '../assets/Paul_gallagher.jpg';
import RonitBatraImage from '../assets/Ronit_batra.jpg';
import TinaGaoImage from '../assets/Tina_gao.jpg';
import CharlieGehringerImage from '../assets/Charlie_gehringer.jpg';
import CalMassaroImage from '../assets/Cal_massaro.jpg';
import AndrewRizziImage from '../assets/Andrew_rizzi.jpg';
import ShrutaThumImage from '../assets/Shruta_thum.jpg';
import LarinaYuImage from '../assets/Larina_yu.jpg';

const ExecutiveBoard = () => {
  const executives = [
    { 
      id: 1, 
      name: 'Colin Herbert', 
      position: 'Chief Executive Officer', 
      major: 'Finance & Economics', 
      year: '3rd Year',
      bio: 'Colin is a 3rd year studying Finance and Economics. This past summer, Colin interned in investment banking with Consensus Advisors, and he will be joining Guggenheim Partners as an Investment Banking Summer Analyst in 2025. He enjoys playing basketball and golf or going for runs in his free time.',
      avatar: ColinHerbertImage
    },
    { 
      id: 2, 
      name: 'Saahas Gowda', 
      position: 'Chief Operating Officer', 
      major: 'Finance & Marketing', 
      year: '3rd Year',
      bio: 'Saahas is a third year from Haymarket, VA studying Commerce. He joined Global Markets Group in the spring of his first year, since presenting primers on Indias mobile payment and Americas sports media landscapes, in addition to pitching Chipotle (CMG) and Ryanair (RYAAY). Next summer, he will be an Associate Consultant Intern at Bain in its Boston office. ​At UVA, he is also actively involved in the Charlottesville Debate League, Housing and Residence Life, and Student Entrepreneurs for Economic Development. In his free time, he enjoys watching political dramas, supporting Boston sports teams, and trying out Charlottesville restaurants.',
      avatar: SaahasGowdaImage
    },
    { 
      id: 3, 
      name: 'Spencer Howe', 
      position: 'Chief Investment Officer', 
      major: 'Finance & Mathematics', 
      year: '3rd Year',
      bio: 'Spencer is a 3rd year studying Finance and Mathematics. This past summer, Spencer interned at Bessemer Trust in New York doing L/S equities. This upcoming summer, he will be an Investment Banking Summer Analyst at Guggenheim Partners. Outside of GMG, he enjoys watching Formula 1, playing tennis, and skiing.',
      avatar: SpencerHoweImage
    },
    { 
      id: 4, 
      name: 'Paul Gallagher', 
      position: 'Chief Development Officer', 
      major: 'Finance', 
      year: '3rd Year',
      bio: 'Paul is a 3rd year student majoring in Commerce and has worked at Draper Asset Management conducting equity research for the past two summers. This summer, he will be an Investment Banking Summer Analyst at Evercore in New York. Outside of GMG, Paul is involved in AKPsi, CSO, and Housing and Residence Life. In his free time, he enjoys listening to new music, watching UFC, and playing board games.',
      avatar: PaulGallagherImage
    },
    { 
      id: 5, 
      name: 'Ronit Batra', 
      position: 'Fund Manager', 
      major: 'Computer Science & Economics', 
      year: '2nd Year',
      bio: 'Ronit is a second-year student from Fairfax, VA, studying Computer Science and Economics. He joined Global Markets Group during the fall of his first year and has since pitched Snowflake (SNOW), Amadeus (AMS.MC), and General Electric Vernova (GEV). For the past two years, he has been working on building his EdTech startup, Edtrax. Outside of GMG, he is also involved in theCourseForum, Machine Learning@UVA, and Greek Life. In his free time, he enjoys playing basketball, watching Washington sports teams, DJing, and playing poker.',
      avatar: RonitBatraImage
    },
    { 
      id: 6, 
      name: 'Tina Gao', 
      position: 'Fund Manager', 
      major: 'Finance & Statistics', 
      year: '2nd Year',
      bio: 'Tina is a second year from Fairfax, VA studying Statistics. She joined GMG in the spring of her first year and pitched long Tradeweb (NASDAQ:TW) and long First Watch (NASDAQ:FWRG). Outside of GMG, she is involved in AKPsi and the CavDaily. In her free time, she enjoys exploring new cafes, baking and painting.',
      avatar: TinaGaoImage
    },
    { 
      id: 7, 
      name: 'Charlie Gehringer', 
      position: 'Fund Manager', 
      major: 'Finance', 
      year: '2nd Year',
      bio: 'Charlie is a 2nd year from Gladstone, NJ studying Economics and pursuing a degree in Commerce. He joined Global Markets Group in the fall of his first year and has since pitched real estate marketplace, Zillow (ZG), SE Asian ride-hailing and food delivery platform, Grab (GRAB), and Indian life insurance company, HDFC Life Insurance (HDFCLIFE). This past summer, Charlie interned in venture capital with Launch Africa Ventures, and he will be joining Investure as a Summer Investment Analyst in 2025. At UVA, he is also actively involved in McIntire Investment Institute, Common Cents, Club Rugby, Greek life, and Intramural Basketball. In his free time, he enjoys skiing, weightlifting, listening to Jimmy Buffett, and watching the Detroit Lions.',
      avatar: CharlieGehringerImage
    },
    { 
      id: 8, 
      name: 'Cal Massaro', 
      position: 'Fund Manager', 
      major: 'Finance & Statistics', 
      year: '2nd Year',
      bio: 'Cal is a second-year from Boston, MA, intending to major in Commerce and Statistics. He joined GMG in the fall of his first year and has since pitched companies like Spotify (SPOT), Vistry Group (VTY), and HDFC Life (HDFCLIFE), in addition to presenting a primer on retail investing trends. Outside of GMG, Cal is actively involved in the Virginia Epilepsy Association, Catholic Hoos, and Bread Across Borders. In his free time, he enjoys playing golf and soccer, rooting for Boston sports, and archery.',
      avatar: CalMassaroImage
    },
    { 
      id: 9, 
      name: 'Andrew Rizzi', 
      position: 'Fund Manager', 
      major: 'Finance & Computer Science', 
      year: '2nd Year',
      bio: 'Andrew is a second year from Vienna, VA studying Computer Science and planning to apply to the School of Commerce. He joined Global Markets Group in the spring of his first year, and has since pitched Long Zoom Communications (NASDAQ: ZM) and Long Wayfair (NYSE: W). This coming summer, he will be joining Level Equity as a Summer Analyst in their New York office. On grounds, he is also involved with the Honor Committee and the Credit and Restructuring Club. With his free time, he enjoys playing poker, cooking Northern European and Italian cuisine, and closely following the UVA sports teams.',
      avatar: AndrewRizziImage
    },
    { 
      id: 10, 
      name: 'Shruta Thum', 
      position: 'Fund Manager', 
      major: 'Finance & Statistics', 
      year: '2nd Year',
      bio: 'Shruta is a second-year, hoping to major in Commerce and Applied Statistics. She has been a part of GMG since the spring of her first year, and has pitched Vivid Seats (SEAT), an online ticketing platform, and Kenvue (KVUE), the former consumer health division of Johnson & Johnson. At UVA, Shruta is also a member of the McIntire Investment Institute, a writer for the Virginia Undergraduate Business Review, and a volunteer through Madison House. In her free time, she enjoys finding new restaurants, going to the gym, and watching 2000s teen dramas.',
      avatar: ShrutaThumImage
    },
    { 
      id: 11, 
      name: 'Larina Yu', 
      position: 'Director of Member Engagement', 
      major: 'Finance, Studio Art, & Computer Science', 
      year: '3rd Year',
      bio: 'Larina is a third year from Ashburn, VA studying Computer Science, Studio Art, and Commerce. She joined Global Markets Group in the spring of her second year and has pitched Daktronics (DAKT) and Kenvue (KVUE). This upcoming summer, she will be an Investment Banking Summer Analyst at Evercore. ​In her free time, she enjoys hiking, painting, and is currently learning to play the guitar!',
      avatar: LarinaYuImage
    }
  ];

  return (
    <div className="exec-board-page">
      <div className="page-header">
        <div className="container">
          <h1>Executive Board</h1>
        </div>
      </div>

      <section className="exec-section">
        <div className="container">
          <div className="section-intro">
            <h2>Our Leadership</h2>
            <p>
              The Global Markets Group Executive Board consists of dedicated student leaders 
              who guide the organization's strategic direction and operations. The executive team 
              ensures the club provides valuable educational opportunities and professional development 
              for all members while maintaining strong connections with alumni and industry partners.
            </p>
          </div>

          <div className="exec-grid">
            {executives.map(exec => (
              <div className="exec-card" key={exec.id}>
                <div className="exec-avatar">
                  {exec.avatar ? (
                    <img 
                      src={exec.avatar} 
                      alt={exec.name} 
                      loading="lazy"
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      {exec.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="exec-info">
                  <h3>{exec.name}</h3>
                  <h4 className="exec-position">{exec.position}</h4>
                  <p className="exec-details">
                    <span className="exec-major">{exec.major}</span> • 
                    <span className="exec-year">{exec.year}</span>
                  </p>
                  <p className="exec-bio">{exec.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExecutiveBoard; 