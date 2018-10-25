import React, { Component } from "react";
import './style/about.css';

class AboutMandy extends Component {
  render() {
    return (
      <div className="aboutInfo">
        <p className="contentheading">
          About Mandy (Founder and CEO) 
        </p>
        
        <img src={require('./pics/mandy.jpg')} alt="Mandy Davenport" ></img>
       
        <p>
        After the birth of my son I realized that I didn't want to go back to working in a outside sales position that required traveling, and being away for days or weeks at a time.
        </p>
        <p>
        A good friend suggested that I start a cleaning business. 
        She commented “You have had your own successful  business in the past, your home is always clean and you say that you truly enjoy cleaning, why not start a cleaning business?”
        </p>
        <p>
        And shortly after the OCD Crew was born.
        </p>
        <p>
        I can honestly say I truly like all my customers and enjoy making their  homes clean, organized and beautiful for them.
        </p>
        <p>
        Whether it's getting a bed and breakfast ready for a guests.<br />
        Helping to organize a space<br />
        Doing a move in or move out clean so that the new owner or tenant has a ready to move in home.<br />
        Cleaning a office space so that people can walk in and start the day in a organized and clean work space.<br />
        Or organizing an area that has been bothering a client<br />
        If it requires, cleaning or organizing in anyway, OCD Crew is the company for you.<br />
        </p>
        
      </div>
    );
  }
}
 
export default AboutMandy;