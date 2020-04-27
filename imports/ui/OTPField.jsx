import React from 'react';
import "./OTPField.css";

export const OTPField = () => (
  <div>
    <div className="boxContainer">
      <div className ="box">
          <input className="inputBox" type="tel" maxlength="1" value=""/>
      </div>
      <div className ="box">
          <input className="inputBox" type="tel" maxlength="1" value=""/>
      </div>
      <div className ="box">
          <input className="inputBox" type="tel" maxlength="1" value=""/>
      </div>
      <div className ="box">
          <input className="inputBox" type="tel" maxlength="1" value=""/>
      </div>
    </div>
  </div>
);


