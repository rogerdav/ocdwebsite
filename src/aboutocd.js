import React, { Component } from "react";
import './about.css';

class AboutOcd extends Component {
  render() {
    return (
      <div className="aboutInfo">
        <p className="aboutheading">
          <span className="green">OCD Crew</span>
        </p>
        <p>
        We are a full service cleaning company built for the now, we partner with our clients to help them in their busy lives to ensure they have the time for what matters most to them.</p>
        <p>
        All our services are customizable to accommodate our clients needs, whether cleaning, organizing or both.
        We pride ourselves on offering, personalized, professional work time after time.
        </p>
        <p>
        Unlike many other companies we do not make you clean up before we visit.<br /> 
        We are pet friendly.<br />
        We listen to your needs and work with your budget<br />
        We provide all cleaning supplies.<br />
        Free estimates and in home consultations.<br />
        We take great pride in providing you with services that exceed your expectations.<br />

        </p>
       
        
      </div>
    );
  }
}
 
export default AboutOcd;