import React from 'react';
import './footernewslatter.css';
const Footer = () => {
    return (
    <div>
    <section className="newsletter-section flex">
        <div className="newsletter-content">
            <h2>Newsletter</h2>
            <p>Sign up to get weekly newsletter to get the latest updates.</p>
        </div>
        <div className="newsletter-form">
            <input type="email" placeholder="Enter email Address" required/>
            <button type="submit">SUBSCRIBE</button>
        </div>
    </section>

    <footer id="footer">
        <div className="footer-content">
            <div className="footer-section about">
                <h1 className="logo-text">ICS</h1>
                <p>
                    ICS thrives on innovation, consistently exploring and adopting emerging technologies to stay ahead of the curve. 
                    We believe in driving technological evolution that empowers businesses to thrive in dynamic environments.
                </p>
            </div >
            <div className="align flex" id="aling">
            <div className="footer-section links">
                <h2>Pages</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="footer-section services">
                <h2>Our Services</h2>
                <ul>
                    <li><a href="#">Software Engineering</a></li>
                    <li><a href="#">Enterprise IT Solutions</a></li>
                    <li><a href="#">Cyber Security</a></li>
                    <li><a href="#">Cloud Migration</a></li>
                    <li><a href="#">Data Transformation</a></li>
                </ul>
            </div>

            <div className="footer-section contact" >
                <h2>Contacts us</h2>
                <ul>
                    <li><a href="mailto:mail@icreativ.com">mail@icreativ.com</a></li>
                    <li><a href="tel:+11812809198">+11812809198</a></li>
                    <li><a href="#">1165 springwood connector, Atlanta GS 30328 USA</a></li>
                </ul>
            </div>
            </div>
        </div>

        <div className="footer-bottom flex" id="f-bottom">
            <p>Copyright © 2024 </p>
            <p>All Rights Reserved | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
        </div>
    </footer>
</div>
    );
}

export default Footer;