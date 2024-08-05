// App.js
import React from 'react';
import ServiceSection from './servicesection.jsx';
import  './service.css';
import Footer from './footernewslatter.jsx'
import { Link } from 'react-router-dom';

const Service = () => {
  const toggleNav = () => {
    const navBars = document.querySelector('.nav');
    navBars.style.top = navBars.style.top === '0px' ? '-25vh' : '0';
  };
  const services = [
    {
      number: '01',
      title: 'Software Engineering',
      briefText: 'At ICS, We take pride in our commitment to craftsmanship, . . . . . .',
      hiddenTexts: [
        'At ICS, We take pride in our commitment to craftsmanship, combining cutting-edge technologies with proven methodologies to craft software solutions that are not just functional but also scalable,robust, and tailored to your unique needs.',
        'In the realm of Software Engineering, we offer a comprehensive suite of services, including custom software development, application integration, and DevOps practices for streamlined operations. Our agile approach fosters adaptability and responsiveness, allowing us to rapidly iterate and refine solutions in line with your evolving requirements.',
        'Our seasoned team of software engineers ensures a seamless and collaborative development process, leveraging their expertise to turn your ideas into reality.'
      ],
      boxes: [
        { title: 'Modernization & Transformation', text: 'Involves updating and enhancing existing systems to leverage contemporary technologies.' },
        { title: 'Mobile App Development', text: 'Development of applications for mobile devices - iOS and Android platforms.' },
        { title: 'Custom Software Development', text: 'Design and development of tailor-made software solutions.' },
        { title: 'UI/UX Design', text: 'User interface (UI) and user experience (UX) design' },
        { title: 'Software Testing and Quality Assurance', text: 'Rigorous testing processes to identify and fix bugs.' },
        { title: 'Requirements Analysis & Consulting', text: 'Collaboration with clients to analyze business requirements.' },
        { title: 'Database Design and Management', text: 'Design, implementation, and management of robust and scalable databases.' }
      ]
    },
    {
      number: '01',
      title: 'Enterprise IT Solutions',
      briefText: 'At ICS, We take pride in our commitment to craftsmanship, . . . . . .',
      hiddenTexts: [
        'At ICS, we understand the critical role that technology plays in the success of modern businesses. Our Enterprise IT Solutions are designed to meet the dynamic needs of your organization, offering a comprehensive suite of services to optimize efficiency, enhance security, and drive innovation.',
        'From custom software development and cloud computing services to cybersecurity solutions and digital transformation services, we bring a wealth of expertise to help you navigate the ever-evolving landscape of information technology.',
        'At ICS, we pride ourselves on staying at the forefront of technological advancements, allowing us to provide innovative solutions that not only meet todays challenges but also anticipate and prepare for the challenges of tomorrow and digital excellence.'
      ],
      boxes: [
        { title: 'Data-Center Management', text: 'Efficient and reliable management of data-center infrastructure and operations.' },
        { title: 'Systems Design and Architecture', text: 'Design and development of tailor-made software solutions.' },
        { title: 'Cloud Design, Implementation, & Management', text: 'Collaboration with clients to analyze business requirements.' },
        { title: 'SharePoint Administration', text: 'Administration and support for SharePoint collaboration and content management platform.' },
        { title: 'Managed IT Services', text: 'Outsourced management and support for IT infrastructure and operations.' },
        { title: 'Business Intelligence and Analytics', text: 'Gathering, analyzing, and visualizing data to aid in business decision-making.' },
        { title: 'Database Design and Management', text: 'Design, implementation, and management of robust and scalable databases.' },
        { title: 'Digital Transformation Services', text: 'Assisting organizations in adopting digital technologies to improve business processes.' }
      ]
    },
    {
      number: '01',
      title: 'Cyber Security',
      briefText: 'Our team of cybersecurity experts employs cutting-edge technologies . . . . . . .',
      hiddenTexts: [
        'Our team of cybersecurity experts employs cutting-edge technologies and proactive strategies to detect, mitigate, and prevent a spectrum of cyber threats. Whether its implementing robust firewalls, conducting thorough risk assessments, or ensuring compliance with industry standards.',
        'ICS Cyber Security goes beyond conventional protection, emphasizing a holistic approach that integrates advanced threat intelligence, secure network architectures, and employee awareness training. From small businesses to large enterprises, we tailor our cybersecurity solutions to meet the unique challenges and requirements of your organization.',
        'With a commitment to staying ahead of emerging threats, ICS is your trusted partner in navigating the ever-evolving landscape of cyber risks.'
      ],
      boxes: [
        { title: 'Risk Assessment and Management', text: 'Conducting thorough cybersecurity risk assessments to identify vulnerabilities and develop strategies to mitigate risks.' },
        { title: 'Systems Design and Architecture', text: 'Design and development of tailor-made software solutions.' },
        { title: 'Cloud Design, Implementation, & Management', text: 'Collaboration with clients to analyze business requirements.' },
        { title: 'Network Security Solutions', text: 'Administration and support for SharePoint collaboration and content management platform.' },
        { title: 'Disaster Recovery and Backup', text: 'Outsourced management and support for IT infrastructure and operations.' },
        { title: 'Business Intelligence and Analytics', text: 'Gathering, analyzing, and visualizing data to aid in business decision-making.' },
        { title: 'Database Design and Management', text: 'Design, implementation, and management of robust and scalable databases.' },
        { title: 'Continuous Monitoring and Support', text: 'Offering 24/7 monitoring of your IT environment to detect and respond to threats in real-time, along with ongoing support and consultancy.' }
      ]
    },
    {
      number: '01',
      title: 'Cloud Migration',
      briefText: 'Our unwavering commitment lies in simplifying the migration process, . . . . . . .',
      hiddenTexts: [
        'Our unwavering commitment lies in simplifying the migration process, ensuring a seamless transition that aligns with your unique business objectives. Whether you seek enhanced scalability, cost optimization, or seamless collaboration, our team of seasoned experts will meticulously guide you through every step of the cloud migration process, unlocking the full potential of cloud technologies.',
        'Equipped with in-depth expertise in cloud platforms and industry best practices, we empower your organization to seamlessly integrate cloud services into your digital infrastructure, unlocking a spectrum of transformative benefits.',
        'Embrace the possibilities with ICS Cloud Migration, where seamless integration meets elevated performance, propelling your digital landscape to new heights of agility and innovation.'
      ],
      boxes: [
        { title: 'Customized Migration Strategy', text: 'Developing a tailored cloud migration plan that aligns with your business goals and minimizes operational disruption.' },
        { title: 'Secure Data Transfer', text: 'Ensuring the safe and secure transfer of your data to the cloud, with a focus on maintaining data integrity and confidentiality.' },
        { title: 'Infrastructure Optimization', text: 'Optimizing cloud infrastructure for performance, scalability, and cost-efficiency, tailored to your specific business needs.' },
        { title: 'Disaster Recovery and Backup', text: 'Administration and support for SharePoint collaboration and content management platform.' },
        { title: 'Compliance and Governance', text: 'Outsourced management and support for IT infrastructure and operations.' },
        { title: 'Seamless Integration', text: 'Gathering, analyzing, and visualizing data to aid in business decision-making.' },
        { title: 'Database Design and Management', text: 'Analyzing and optimizing cloud spending to ensure cost-effective use of cloud resources without compromising on performance.' },
        { title: 'Digital Transformation Services', text: 'Assisting organizations in adopting digital technologies to improve business processes.' }
      ]
    },
    {
      number: '01',
      title: 'Digital Transformation',
      briefText: 'Our unwavering commitment lies in simplifying the migration process, . . . . . . .',
      hiddenTexts: [
        'Our unwavering commitment lies in simplifying the migration process, ensuring a seamless transition that aligns with your unique business objectives. Whether you seek enhanced scalability, cost optimization, or seamless collaboration, our team of seasoned experts will meticulously guide you through every step of the cloud migration process, unlocking the full potential of cloud technologies.',
        'Equipped with in-depth expertise in cloud platforms and industry best practices, we empower your organization to seamlessly integrate cloud services into your digital infrastructure, unlocking a spectrum of transformative benefits.',
        'Embrace the possibilities with ICS Cloud Migration, where seamless integration meets elevated performance, propelling your digital landscape to new heights of agility and innovation.'
      ],
      boxes: [
        { title: 'Modernization & Transformation', text: 'Involves updating and enhancing existing systems to leverage contemporary technologies.' },
        { title: 'IT Strategy Development', text: 'Crafting tailored digital strategies to align with your business objectives.' },
        { title: 'Continuous Support and Training', text: 'Utilizing artificial intelligence and automation to streamline operations, reduce manual efforts, and enhance customer experiences.' },
        { title: 'Automation and AI Integration', text: 'Administration and support for SharePoint collaboration and content management platform.' },
        { title: 'Modernizing Legacy Systems', text: 'Outsourced management and support for IT infrastructure and operations.' },
        { title: 'Cybersecurity Enhancement', text: 'Implementing robust security measures to protect your digital assets and ensure compliance with industry standards.' },
        { title: 'Database Design and Management', text: 'Analyzing and optimizing cloud spending to ensure cost-effective use of cloud resources without compromising on performance.' },
        { title: 'Digital Transformation Services', text: 'Assisting organizations in adopting digital technologies to improve business processes.' }
      ]
    },
    // Add other services similarly
  ];

  return (
    <div>
      <section id="header" style={{backgroundImage:"none",minHeight:'0px'}}>
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
            <img src="images/whiteBar.png" alt="" width="30px" height="30px" />
          </div>
        </nav>
      </section>

      <section id="offer">
        <div className="background"></div>
        <div className="buttons flex">
          <a href="#">WHAT WE OFFER</a>
        </div>
        <h1 style={{color:"#FAFAFA"}}>Services we can help you with</h1>
      </section>

      <section id="services">
        <p>At ICS, we offer the greatest services that will be beneficial in <br /> every manner.</p>
        {services.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </section>
      <Footer/>
    </div>
  );
};

export default Service ;
