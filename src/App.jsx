import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import RequestForm from "./RequestForm";
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  
  return( 
    
      

      <main>
        <div>
      <section id="home" className="hero">
        <div className="hero-overlay">
          <h1>Germimator Cleaning</h1>
          <p>Killing Germs. Elevating Clean.</p>
          <a href="#request" className="hero-btn">
            Request Cleaning
          </a>
           
            
          <section id="about" className="about section">
          <div classname="content">
          <h2>About Us</h2>
          <p>
  With over a combined 20 years of experience, our family-owned cleaning company has been dedicated to providing exceptional residential and commercial cleaning services with a personal touch. Founded on the values of honesty, reliability, and hard work, we have built a strong reputation in the community for our consistent quality and attention to detail. From small apartments to large office spaces, our experienced team treats every job with the same level of care and professionalism that has kept our customers coming back for two decades.
 &nbsp;
 &nbsp;
 
As a family-run business, we understand the importance of trust and take pride in creating clean, healthy environments for our clients. Our hands-on approach ensures that every member of our team is trained to meet our high standards, using eco-friendly products and proven techniques. Whether it’s a one-time deep clean or routine maintenance, we’re committed to making your space shine—just like we would our own.
          </p>
          </div>
        </section>
        </div>
      </section>
    </div>
      
       

        

       

        <section id="request" className="section request">
          <h2>Request a Cleaning</h2>
          <p className="subtext">
            Tell us what you need. We’ll reply with pricing and available times.
          </p>
          <RequestForm />
        </section>
      

    
    <footer className="footer">
      <div>© {new Date().getFullYear()} Germinator Cleaning — All rights reserved.</div>
    </footer>
  


  </main>
  
);
}
export default App;
