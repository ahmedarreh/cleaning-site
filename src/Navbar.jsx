import React from "react";
import "./index.css";

export default function Navbar() {
  return (

<div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="logo">Germinator Cleaning</div>
          <div className="tagline">Fast · Reliable</div>
        </div>

        <nav className="nav">
          <span>
          <a className="navLink" href="#home">Home</a></span>
          {'   '}
            <span><a className="navLink" href="#about">About</a></span>
            {' '}
          <div className="requestButton">
            <span><a className="btn" href="#request">Request a Cleaning</a></span>
           
          </div>
    
        </nav>
        </header>
        </div>

  );
  }
