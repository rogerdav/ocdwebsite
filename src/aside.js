import React, { Component} from 'react';
import './aside.css';
import {Container, Row, Col} from 'reactstrap';

class ContactAside extends Component {
  render () {
    return ( 
      <Container className="contact">
        <Row>
          <Col>
          <img src="https://png.icons8.com/windows/60/000000/contacts.png" />
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>(206) 353-9012</h5>
          </Col>
        </Row>
        <Row>
          <Col>
          <a href="mailto:davenport.mandy@gmail.com"><img src="https://png.icons8.com/ios/40/000000/email-filled.png" /></a>
          </Col>
        </Row>
        <Row>
          <Col>
          <h5>davenport.mandy@gmail.com</h5>
          </Col>
        </Row>
        {/* --------------------------------------------- */}
        <Row className="contactheading">
          <Col xs="2">
            <img src="https://png.icons8.com/ios/30/000000/clock.png" alt="" />
          </Col>
          <Col xs="auto">
            <h5>When We Work</h5>
          </Col>
        </Row>
        <Row>
            <Col sm={{ size: 'auto', offset: 2 }}>
              <h6>Mon - Fri</h6>
            </Col>
            <Col xs="auto">
              <h6>9am - 4:30pm</h6>
            </Col>
        </Row>
        <Row>
            <Col sm={{ size: 'auto', offset: 2 }}>
              <h6>Sat - Sun</h6>
            </Col>
            <Col xs="auto">
              <h6>By Request Only</h6>
            </Col>
        </Row>
        
        {/* ----------------------------------------------- */}
        <Row className="contactheading">
          <Col xs="2">
          <img src="https://png.icons8.com/ios/30/000000/marker.png" />

          </Col>
          <Col xs="auto">
          <h5>Where We Work</h5>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <h6>
              West Seattle
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <h6>
              Downtown Core
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <h6>
              Magnolia
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <h6>
              Queen Anne
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <h6>
             Burien
            </h6>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 2 }}>
            <h6>
              Renton
            </h6>
          </Col>
        </Row>
        {/* ------------------------------------------------------- */}
      </Container>
    );
  }

}
export default ContactAside;