import React, { Component } from "react";
import { Container, Row, Col} from 'reactstrap';
import './style/services.css';
 
class Services extends Component {
  render() {
    return (
      <div className="services">
        <p className="contentheading">Services</p>
        <h5>These are the services we provide, if a service is not listed that you require please contact me</h5>
       
          <Row>
          <img src="https://png.icons8.com/dotty/30/000000/checked-checkbox.png" /><h5>Residential</h5>
          </Row>
          <Row>
          <img src="https://png.icons8.com/dotty/30/000000/checked-checkbox.png" /><h5>Air BnB  / Bed 'n Breakfast units</h5>
          </Row>
          <Row>
          <img src="https://png.icons8.com/dotty/30/000000/checked-checkbox.png" /><h5>Commercial</h5>
          </Row>
          <Row>
          <img src="https://png.icons8.com/dotty/30/000000/checked-checkbox.png" /><h5>Move In / Move out</h5>
          </Row>
          <Row>
          <img src="https://png.icons8.com/dotty/30/000000/checked-checkbox.png" /><h5>Home and Office Organization</h5>
          </Row>
          <Row>
          <img src="https://png.icons8.com/dotty/30/000000/checked-checkbox.png" /><h5>A La Carte Cleaning solutions</h5>
          </Row>
        
      </div>
    );
  }
}
 
export default Services;


