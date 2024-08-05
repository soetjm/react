import React from 'react';
import './home.css';
import './media.css';
import rightArrow from './images/right.png'; 
import aboutImage from './images/aboutas2.png'; 
import rightBlack from './images/rightblack.png';
import leftArrow from './images/left.png'
import cote from "./images/cote.png";
import whiteBar from "./images/whiteBar.png"
import homePerson from './images/homeperson.png';
import Cyber from './images/Cyber.png';
import Buld from './images/bulde.png';
import tole from './images/tole.png';
import Box from './propsproject.jsx';
import { Link } from 'react-router-dom';
function Home() {
  const toggleNav = () => {
    const navBars = document.querySelector('.nav');
    navBars.style.top = navBars.style.top === '0px' ? '-25vh' : '0';
  };  
  return (
    <div>
      
      <section id="header" >
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
                    <img src={whiteBar} alt=""  width="30px" height="30px"/>
                </div>
        </nav>
        <div className="hero flex">
          <div>
            <h1 style={{ color: 'aliceblue' }}>Driven By <span>Quality</span> & Dedicated to Solutions</h1>
            <p style={{ color: 'aliceblue' }}>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal.</p>
            <div>
              <span>
                <p className="explor">Explore More</p>
                <img style={{ width: '25px', transform: 'rotateZ(-30deg)' }} src={rightArrow} alt="Arrow" />
              </span>
            </div>
          </div>
          <div style={{ width: '120%' }}></div>
        </div>
      </section>
      <section id="about_as">
        <div className="flex" id="body">
          <div className="aboutas-img">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="aboutas-p">
            <a href="#">About Company</a>
            <h1>We Create Impactful Digital Experiences</h1>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation on the runway heading towards a streamlined cloud.</p>
            <div className="flex">
              <div className="year_of_experiance">
                <p className='num'>10+</p>
                <p className='text'>year of experience</p>
              </div>
              <div className="year_of_experiance">
                <p className='num'>50+</p>
                <p className='text'>Completed projects</p>
              </div>
              <div className="year_of_experiance">
                <p className='num'>120+</p>
                <p className='text'>Team members</p>
              </div>
            </div>
            <a href="#" className="explor"><div><p style={{margin:"5px auto"}}>Explore More</p><img style={{width: '25px' ,transform: 'rotateZ(-30deg)'}} src={rightBlack} alt="Arrow" /></div></a>
          </div>
        </div>
      </section>
      <section id="offer" style={{width:"100%"}}>
            <div className="buttons flex">
                <a href="#" style={{color:"#2563EB",borderColor:"#2563EB"}}>WHAT WE OFFER</a>
                <a href="#" className="explor"><div><p>View All Services</p><img style={{width: '25px',transform: 'rotateZ(-30deg)'}} src={rightBlack} alt="" /></div></a>
            </div>
            <div id="h1-text">
                <h1 style={{color:"#000000"}}>What We Can Do For Our Clients</h1>
                <div></div>
            </div>
            <div id="p-text">
                <p>At ICS, we are committed to delivering unparalleled excellence through cutting-edge software solutions
                   designed to tackle your unique bussiness challenge head-on.Whether you seek to streamline processes,enhance
                   efficiency,or elevate customer experience,our meticulously crafted software solution are meticulously engineered
                   to propel your bussines forwared.
                </p>
                <div></div>
            </div>
            <div className="box-holder flex">
                <>
                <Box image={tole} type="Software Engineering" text="Develop tailored software applications to streamline business processes, automate repetitive..." number="01"/>
                <Box image={Cyber} type="Cyber Security" text="Implement robust cybersecurity measures, including advanced threat detection, encryption, and regular security audits..." number="02"/>
                <Box image={Buld} type="Cloud Migration" text="Enable clients to harness the power of the cloud for scalable and flexible IT infrastructure..." number="03"/>
                </>
                
            
            </div>
      </section>
      <section id="why-choose-us">
        <div className="media"><a href="#" >WHY CHOOSE US</a></div>
        <div className="text-holder">
            <div className="texts" >
                <h1>We excel in software solutions width
                    a decade of experties
                </h1>
                <p>Our team is higly skilled profecionals is dedicated to delivery
                    solutions that enhance efficency,security,and service delivery for bothe
                    commerical and government clients.
                </p>
                <p>
                    Our comprhensive capability span the entire IT spectrum,including software
                    development,data analytics,cybersecurity,and digital transformation.Out team of higly skilled
                    professional is commited to delevering solutions that enhance governement efficency,security,and service delivery
                </p>
                <div className="wraper flex">
                    <div>
                        <h1>Quality response time</h1>
                        <h1>Understanding our customers need</h1>
                    </div>
                    <div>
                        <h1>High level of professionalism</h1>
                        <h1>Incredible customer service</h1>
                    </div>
                </div>
            </div>
            <div className="none"></div>
        </div>
      </section>
      <section id="middeler">
            <h1>Elevate Your Project With ICS</h1>
            <p>As a forward-thinking IT solutions 
                provider, our company stands at the 
                forefront of innovation, offering a 
                robust capability statement tailored
                for you
            </p>
            <p style={{margin_top: '50px'}}>Learn more why our clients
                 trust ICS with there projects
            </p>
            <button className="downlode">
                DOWNLODE CAPABILITY STARMENT
            </button>
      </section>
      <section id="testemonial">
        <div className="media"><a href="#">TESTIMONIALS</a></div>
        <h1>Check Out What Our Clients Have To Say</h1>
        <div className="testemonail-holder flex">
            <div><img src={homePerson} alt="" /></div>
            <div className="testemonials">
                <img src={cote} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore ea odit nihil temporibus 
                    assumenda veniam et rem qui excepturi, 
                    quod facere nulla ducimus cum vel labore rerum,
                     alias facilis aspernatur optio accusamus cumque
                      maxime doloremque velit! Laboriosam labore 
                      similique sed ab, tenetur perferendis 
                .</p>
                <div>
                    <p>Programmer</p>
                    <p className="t-name">Lesile Alexander</p>
                </div>
                <div className="arows">
                    <img src={leftArrow}alt="" />
                    <img src={leftArrow} style={{transform: "rotateZ(-180deg)"}} alt="" />
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Home;