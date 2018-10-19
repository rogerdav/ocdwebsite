import React, { Component } from "react";
import { Container, Row, Col} from 'reactstrap';
import './services.css';
 
class Services extends Component {
  render() {
    return (
      <div className="services">
        <h2>Services</h2>
        <h5>These are the services we provide, if a service is not listed that you require please contact me</h5>
        <Container>
          <Row>
            <h5>Residential</h5>
          </Row>
          <Row>
             <h5>Air BnB  / Bed 'n Breakfast units</h5>
          </Row>
          <Row>
            <h5>Commercial</h5>
          </Row>
          <Row>
            <h5>Move In / Move out</h5>
          </Row>
          <Row>
            <h5>Home and Office Organization</h5>
          </Row>
          <Row>
            <h5>A La Carte Cleaning solutions</h5>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default Services;


