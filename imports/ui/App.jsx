import React from 'react';
import { NavBar } from './NavBar.jsx';
import { Info } from './Info.jsx';
import { OTPField } from './OTPField';

import "./Info.css";

export const App = () => (
  <div className="container">
    <NavBar/>
    <div className="content-container">
      <Info/>
      <OTPField/>
      <div className="describeText">
        หากไม่ได้รับ OTP <button className="tryAgainButton">ลองอีกครั้ง</button>
      </div>
      <div className="submitButtonContainer">
        <button className="submitButton">ยืนยัน</button>
      </div>

    </div>
  </div>
);
