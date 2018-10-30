import React, { Component } from "react";
import { Row } from 'reactstrap';
import './style/services.css';
 
class Services extends Component {
  render() {
    return (
      <div className="services">
        <p className="contentheading">Services</p>
        <p>These are the services we provide. If a service is not listed that you are looking for, please contact us.</p>
       
          <Row>
             <h5>&#10004;  Residential</h5>
          </Row>
          <Row>
             <h5>&#10004;  Air BnB / Bed & Breakfasts</h5>
          </Row>
          <Row>
            <h5>&#10004;  Office</h5>
          </Row>
          <Row>
            <h5>&#10004;  Move In / Move Out</h5>
          </Row>
          <Row>
            <h5>&#10004;  Home and Office Organization</h5>
          </Row>
          <Row>
            <h5>&#10004;  A La Carte Cleaning Solutions</h5>
          </Row>
        
      </div>
    );
  }
}
 
export default Services;


