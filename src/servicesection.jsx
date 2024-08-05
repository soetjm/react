// ServiceSection.js

import React, { useState } from 'react';
import rightBlack from './images/rightblack.png';

const ServiceSection = ({ number, title, briefText, hiddenTexts, boxes }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="service_holder">
      <a className="explor" onClick={toggleVisibility}>
        <div>
          <p style={{ marginBottom: '0px', color: '#2563EB' }}>{number}</p>
          <img
            style={{ width: '20px', transform: 'rotateZ(30deg)' }}
            src={rightBlack}
            alt=""
          />
        </div>
      </a>
      <h1>{title}</h1>
      <p className="text" style={{ display: isVisible ? 'none' : 'inline-block' }}>
        {briefText}
      </p>
      <div className="hidden-explantion" style={{ display: isVisible ? 'inline-block' : 'none' }}>
        {hiddenTexts.map((text, index) => (
          <p className="text-hidden" key={index}>{text}</p>
        ))}
        <div className="box-holder">
          {boxes.map((box, index) => (
            <div className="box" key={index}>
              <div className="box-header">
                <h2>{box.title}</h2>
              </div>
              <p id="box-text">{box.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;


