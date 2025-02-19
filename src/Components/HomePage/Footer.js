import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="cardbg text-white py-4">
    <div className="container">
        <div className="row">
      <div className="col text-center">
          <h5>Cultivating Efficiency, Tracking Excellence</h5>
          <p>Your Trusted Inventory Management Partner</p>
        </div>
      </div>
      <div className="row ">
       
          <ul className="text-center">
           <Link  className='text-decoration text-white mx-3'> Privacy Policy</Link>
          <Link  className='text-decoration text-white '>Terms & Conditions</Link>
          </ul>
    
      </div>
    
      <div className="text-center mt-2">
        <p>&copy; 2025 Dineventory. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
