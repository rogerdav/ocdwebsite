import React, { Component } from "react";
import './style/about.css';

class AboutOcd extends Component {
  render() {
    return (
      <div className="aboutInfo">
        <p className="contentheading">
          OCD Crew
        </p>
        <p>
        We are a full-service cleaning company. If you require cleaning or organizing, <br /><span>OCD Crew</span> is the company for you.<br /> We partner with our clients to help them in their busy lives to ensure they have the time for what matters most to them.</p>
        <p>
        We can customize all of our services to accomodate our clients needs, whether cleaning, organizing or both.
        We pride ourselves in offering personalized, professional work time after time.
        </p>
        <p>
        Unlike many other companies, we do not make you clean up before we visit and we are pet friendly.
        </p>
        <p>
        We listen to your needs and work within your budget.<br />
        We provide all cleaning supplies.<br />
        Free estimates and in-home consultations.<br />
        We take great pride in providing you with service that exceeds your expectations.<br />

        </p>
       
        
      </div>
    );
  }
}
 
export default AboutOcd;