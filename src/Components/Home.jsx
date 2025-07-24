// import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='header'>
        
        <div className="left-section">
                <div className="Logo">
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <h3>Blood Donation</h3>
        </div>
            <ul className="nav">
                <li><Link to="/" >HOME</Link></li>
                <li><Link to="/bloodbank">BLOODBANK</Link></li>
                <li><Link to="/cause">CAUSE</Link></li>
                <li><Link to="/aboutus" >ABOUTUS</Link></li>
                <li><Link to="/contactus">CONTACTUS</Link></li>
            </ul>

        
        <div className="right-section"> 
            <button className='btn'>DONATE US</button>
             <button className='btn'>LOGIN</button>
        </div>
        
    </div>
  )
}

export default Home