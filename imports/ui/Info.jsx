import React ,{useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

import "./Info.css";

export const Info = () => {

  const [phoneNumber,setPhoneNumber] = useState("+66 88 8888888")

  return (
    <div>
      <h1 className="phoneNumberValidateText">ยืนยันหมายเลขโทรศัพท์</h1>
      <div className="describeText">
        กรุณาใส่หมายเลข OTP ที่ถูกส่งไปยังหมายเลขโทรศัพท์
      </div>
      <div className="describeText">
        {phoneNumber}
      </div>
    </div>
  );
};
