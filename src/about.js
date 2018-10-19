import React, { Component } from "react";
import './about.css';

class About extends Component {
  render() {
    return (
      <div className="aboutInfo">
        <p className="heading">
          About OCD Crew 
        </p>
        <p>
          We are a full service cleaning company built for the now, we partner with our clients to help them in their busy lives to ensure they have the time for what matters most to them. All our services are customizable to accommodate our clients needs. We pride ourselves on offering, personalized, professional work time after time.
        </p>
        <img src={require('./pics/mandy.jpg')} alt="Mandy Davenport" ></img>
        <p className="heading" > 
          About Mandy Davenport (Owner and CEO)
        </p> 
        <p>
          After the birth of my son I realized that I didn't want to go back to working in a outside sales position that required traveling, and being away for days or weeks at a time.
        </p>
        <p>
          A good friend suggested that I start a cleaning business. She commented “You have had your own successful  business in the past, your home is always clean and you say that you truly enjoy cleaning, why not start a cleaning business?”.
        </p>
        <p>
           And shortly after <span>the</span> OCD Crew was born.
        </p>
        <p>
           I can honestly say I truly like all my customers and enjoy making their  homes clean and beautiful for them.
        </p>
        <p>
          Whether it's getting a bed and breakfast ready for a guests. Helping to organize a space. Doing a move in or move out clean so that the new owner or tenant has a ready to move in home. Cleaning a office space so that people can walk in and start the day in a organized and clean work space. If it requires, cleaning or organizing in anyway, OCD Crew is the company for you.
        </p>
        
      </div>
    );
  }
}
 
export default About;