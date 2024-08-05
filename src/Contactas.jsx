import React from 'react';
import './contactas.css';
import Box from './contactBox.jsx';
import Footer from './footernewslatter.jsx';
import whiteBar from './images/whiteBar.png';
import phone from './images/phone.png'
import googlMap from './images/googlmap.png'
import mail from './images/mail.png';
import location from './images/location.png';
import clock from './images/clock.png'
import { Link } from 'react-router-dom';


const Contactas = () => {
  const toggleNav = () => {
    const navBars = document.querySelector('.nav');
    navBars.style.top = navBars.style.top === '0px' ? '-25vh' : '0';
  };  
  return (
    <div>
     <section id="header" style={{backgroundImage: "none",minHeight:'0px'}}>
            <nav id="nav-bars" className="flex">
                <p >ICS</p>
                <ul className="nav flex">
                <li> <Link to="/" className="header-font" >Home</Link>  </li>
                <li><Link className="header-font" to="/about" >About us</Link></li>
                <li><Link className="header-font" to = "/service">Service</Link></li>
                <li><Link className="header-font" to= "/contact">Contact</Link></li>
                <label id="media-x" onClick={toggleNav}>X</label>
                </ul>
                <button className ="header-font">Get In Touch</button>
                <div id="mobile" onClick={toggleNav}>
                    <img src={whiteBar} alt="" srcSet="" width="30px" height="30px"/>
                </div>
            </nav>
     </section>
     <section id="who-we-are">
            <div className="buttons flex">
                <a href="#">GET IN TOUCH</a>
            </div>
    </section>
     <section id="offer">
        <div className="box-holder flex">
          <>
            <Box image={phone} text1="Phone & Fax" text2="Mobile:+181828092" text3="Fax:+44-208-12456" ></Box>
            <Box image={mail} text1="Mail Address" text2="mail@icreativv.com" text3="Info.icreativv@gmail.com" ></Box>
            <Box image={location} text1="Our Location" text2="1165 Springwood Connector" text3=", Atlanta, GA 30328 USA" ></Box>
            <Box image={clock} text1="Office Hour" text2="Sun - Thu 09 am - 06pm" text3="Fri - Sat 4 pm - 10pm" ></Box>
          </>
     
        </div>
     </section>
     <section className="map-form-container">
        <div className="map">
            <img src={googlMap} alt="" srcSet="" width="100%" height="100%"/>
        </div>
        <div className="form">
            <h3>Leave A Message</h3>
            <form action="#">
                <div className="flex">
                    <input type="text" name="first_name" placeholder="First Name" style={{"margin-right": "30px"}}/>
                    <input type="text" name="last_name" placeholder="Last Name"/>
                </div>
                <input type="text" name="subject" placeholder="Subject"/>
                <textarea name="note" placeholder="Note"></textarea>
                <button type="submit">Get In Touch</button>
            </form>
        </div>
    </section>
      <>
        <Footer/>
      </>
    </div>
  );
};

export default Contactas;
