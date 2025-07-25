import React, { useState } from 'react';
import './Cause.css';

const Cause = () => {
  const [donation, setDonation] = useState(50);
  const target = 12000;

  const handleChange = (e) => {
    setDonation(parseInt(e.target.value));
  };

  const percentage = Math.min((donation / target) * 100, 100); // Limit to 100%

  return (
    <div className="cause-container">
      <div className="cause-image">
        <img src="/blood_donation.png" alt="Blood Donation" />
      </div>

      <div className="cause-content">
        <h2>Eradicate Blood Shortage</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ad doloremque vero et praesentium ducimus.
          Quo error neque pariatur modi cumque quae ut repudiandae magnam sapiente amet, ipsa architecto ipsum temporibus
          explicabo quibusdam mollitia vero omnis, expedita possimus debitis tempore!
        </p>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
          </div>

          {/* Slider */}
          <input
            type="range"
            min="50"
            max="12000"
            step="50"
            value={donation}
            onChange={handleChange}
            className="slider"
          />
        </div>

        {/* Donation Info */}
        <p>DONATION: ₹{donation} / ₹{target}</p>

        {/* Buttons */}
        <div className="buttons">
          <button className="fb-button">
            <img src="/facebook.png" width="15" height="15" alt="" /> SHARE
          </button>
           <button className="w-button">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z"></path>
</svg>SHARE
          </button>

        </div>

        <button className="donate-button">DONATE NOW</button>
      </div>
    </div>
  );
};

export default Cause;
