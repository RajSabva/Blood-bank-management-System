import React from 'react';
import './Bloodbank.css'

const BloodBank = () => {
  return (
    <div className="middle-section">
        <div className="search-box">
            <h2>Find Blood banks of India</h2>
            <div className="search-form">
                <select name="" id="" className="dropdown">
                    <option>Select state</option>
                    <option>Gujarat</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                </select>
                 <select className="dropdown">
                    <option>Select city</option>
                    <option>Ahmedabad</option>
                    <option>Surat</option>
                    <option>Mumbai</option>
                </select>
                <button className="search-btn">
                    SEARCH
                </button>
            </div>
        </div>
      
    </div>
  );
};

export default BloodBank;
