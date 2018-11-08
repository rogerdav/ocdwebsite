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
        After the birth of my child I realized that I didn't want to go back to working in an outside sales position that required traveling, and being away for days or weeks at a time.
        </p>
        <p>
        A good friend inspired me to start <span>OCD Crew.</span> 
        
        </p>
        <p>
        Whether it's getting a bed and breakfast ready for a guests.<br />
        Helping to organize a space.<br />
        Doing a move in or move out clean so that the new owner or tenant has a ready to move in home.<br />
        Cleaning an office space so that people can walk in and start the day in a clean work space.<br />
        </p>
        <p>
        I can honestly say that I truly like all my customers and enjoy making their homes clean, organized and beautiful for them.<br />
        If it requires, cleaning or organizing in anyway, <span>OCD Crew</span> is the company for you.
        </p>
        
      </div>
    );
  }
}
 
export default AboutMandy;