import React from 'react'
import './Middle.css'

const Middle = () => {
  return (
        
    <div className="hero">
      <div className="hero-top">
      <div className="image">
          <img src="/first_image.jpg" alt="Blood Donation" />
      </div>
      <div className="overlay">
        <div className="formbox">
          <select><option>--Blood Group--</option></select>
          <select><option>Select State</option></select>
          <select><option>Select Taluka</option></select>
          <select><option>All Tehsil</option></select>
          <button>FIND BLOOD</button>
        </div>
      </div>
      <div className="right-content">
        <h1> <strong>Donate Blood</strong> Give the Gift of Life</h1>
        <div className="action-button">
          <div className="circle"><img width="45" height="40" src="https://img.icons8.com/ios-glyphs/30/drop-of-blood.png" alt="drop-of-blood"/><br />Request <br />Blood</div>
          <div className="circle"><img width="54" height="54" src="https://img.icons8.com/pastel-glyph/64/person-male--v3.png" alt="person-male--v3"/><br />Find Blood<br />Donar</div>
        </div>
      </div>
      </div>
      <div className="white-line"></div>
      <div className="second">
        {[1, 2, 3].map((box, index) => (
          <div className="donation-box" key={index}>
            <div className="word">Donations</div>
            <div className="line">
              We are grateful for our Real Hero and hope for them always 
              success who helps Donate to Blood Bank Today
            </div>
            <div className="donate-btn">
              <button>DONATE US</button>
            </div>
          </div>
        ))}
      </div>
      <div className="white-line"></div>
      <div className="why-section">
        <div className="image-side">
          <img src="/first_image.jpg" alt="Blood Donation" />
        </div>
        <div className="text-side">
          <h2>Why Should You Donate</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, assumenda repellat? Blanditiis eum modi mollitia dolore! Alias fuga ipsam praesentium provident commodi nemo voluptatibus sapiente corrupti nisi cumque. Rem qui, in adipisci aliquam ut ipsum tenetur voluptate officiis, placeat distinctio vero praesentium maxime laborum debitis.
          </p>
        </div>
      </div>
      <div className="white-line"></div>
    </div>
  )
}

export default Middle