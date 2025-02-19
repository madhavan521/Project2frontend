import React from 'react'
import Footer from './HomePage/Footer';
import Features from './HomePage/Features';
import FAQ from './HomePage/FAQ';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
<div className="bg-white text-black min-vh-100">

      {/* Hero Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-4 mb-3">Revolutionize Your Kitchen Operations</h2>
          <p className="lead mb-4">
            Dineventory helps you track ingredients, minimize waste, and optimize
            your purchasing, increasing profitability and enhancing customer satisfaction.
          </p>
          <Link to='/dashboard'
            className="btn text-decoration-none  btn-lg shadow"
          >
            Learn More
          </Link>
        </div>
      </section>
   <Features />  
    <FAQ /> 
   <Footer />
    </div>
);
}

export default Home
