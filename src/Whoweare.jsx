
import './whoweare.css';
// import './footernewslatter.css';
import Footer from './footernewslatter.jsx';
import whiteBar from './images/whiteBar.png';
import aboutas1 from './images/aboutas1.png';
import aboutas2 from './images/aboutas2.png';
import aboutas3 from './images/aboutas3.png';
import person1 from './images/person1.png';
import person2 from './images/person2.png';
import person3 from './images/person3.png';
import person4 from './images/person4.png';
import { Link } from 'react-router-dom';
const Whoweare = () => {
  const toggleNav = () => {
    const navBars = document.querySelector('.nav');
    navBars.style.top = navBars.style.top === '0px' ? '-25vh' : '0';
  };

  return (
    <div>
      <header id="header" style={{backgroundImage:"none",minHeight:'0px'}}>
        <nav id="nav-bars" className="flex">
          <p>ICS</p>
          <ul className="nav flex">
          <li> <Link to="/" className="header-font" >Home</Link>  </li>
            <li><Link className="header-font" to="/about" >About us</Link></li>
            <li><Link className="header-font" to = "/service">Service</Link></li>
            <li><Link className="header-font" to= "/contact">Contact</Link></li>
            <label id="media-x" onClick={toggleNav}>X</label>
          </ul>
          <button className="header-font">Get In Touch</button>
          <div id="mobile" onClick={toggleNav}>
            <img src={whiteBar} alt="Menu" width="30px" height="30px" />
          </div>
        </nav>
      </header>

      <section id="who-we-are">
        <div className="buttons flex">
          <a href="#">WHO WE ARE</a>
        </div>
      </section>

      <section id="about_as">
        <div className="flex" id="body">
          <div className="aboutas-img">
            <div className="border"></div>
            <img src={aboutas1} alt="About Us" />
          </div>
          <div className="aboutas-p">
            <h1>About us</h1>
            <p className="aboutas-paragraph">
              Established in 2017, Icreativv Consulting and Service (ICS)
              is a leading technology solutions provider based in Atlanta, Georgia. Committed to
              prioritizing our Clients' needs, we deliver exceptional solutions and services at 
              competitive prices.
            </p>
            <p className="aboutas-paragraph">
              At ICS, we believe that quality and affordability go hand-in-hand.
              Contact us today to learn more about how we can help your organization achieve 
              success with our affordable, high-quality solutions.
            </p>
            <p className="aboutas-paragraph">
              We cultivate strong relationships with our clients, 
              fostering trust and transparency as the cornerstones of our interactions. At ICS,
              we firmly believe that quality and affordability can coexist harmoniously.
              Contact us today to discover how our affordable, high-quality solutions can
              empower your organization to achieve remarkable success.
            </p>
          </div>
        </div>
        <div className="flex" id="body">
          <div className="aboutas-p" id="mergion">
            <h1>Our Mission</h1>
            <p className="aboutas-paragraph">
              At the core of our mission is the relentless pursuit of empowering businesses
              with cutting-edge solutions that transcend industry standards. Established with a
              passion for technology, our journey is woven with a tapestry of expertise, 
              collaboration, and a steadfast commitment to our clients.
            </p>
          </div>
          <div className="aboutas-img" id="image-mergin">
            <div className="border"></div>
            <img src={aboutas2} alt="Our Mission" />
          </div>
        </div>
        <div className="flex" id="body">
          <div className="aboutas-img">
            <div className="border"></div>
            <img src={aboutas3} alt="Our Values" />
          </div>
          <div className="aboutas-p">
            <h1>Our Values</h1>
            <p className="aboutas-paragraph">
              Rooted in the vision of our immigrant founder, ICS operates 
              with a foundation built on gratitude, honesty, partnership, and an unwavering commitment
              to community upliftment. These principles shape our values, guiding us in every 
              endeavor we undertake.
            </p> 
            <h2 style={{ marginBottom: '15px' }}>Honesty & Integrity</h2>          
            <h2 style={{ marginBottom: '15px' }}>Inclusion & Diversity</h2>          
            <h2 style={{ marginBottom: '15px' }}>Partnership & Relationship Focus</h2>          
            <h2 style={{ marginBottom: '15px' }}>Social Responsibility</h2>          
          </div>
        </div>
      </section>

      <section id="our-experts">
        <div className="buttons flex">
          <a href="#">OUR EXPERTS</a>
        </div>
        <h1>Meet Our Creative Staff</h1>
        <div className="flex" id="staffs">
          <div className="staff">
            <img src={person1} alt="Lesile Alexander" width="300px" height="353px" />
            <p>Programmer</p>
            <h2>Lesile Alexander</h2>
          </div>
          <div className="staff">
            <img src={person2} alt="Lesile Alexander" width="300px" height="353px" />
            <p>Programmer</p>
            <h2>Lesile Alexander</h2>
          </div>
          <div className="staff">
            <img src={person3} alt="Lesile Alexander" width="300px" height="353px" />
            <p>Programmer</p>
            <h2>Lesile Alexander</h2>
          </div>
          <div className="staff">
            <img src={person4} alt="Lesile Alexander" width="300px" height="353px" />
            <p>Programmer</p>
            <h2>Lesile Alexander</h2>
          </div>
        </div>
      </section>
      <>
        <Footer/>
      </>
    </div>
  );
};

export default Whoweare;
