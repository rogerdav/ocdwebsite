import React, { Component} from 'react';
import './style/aside.css';
import {Container, Row, Col, Button} from 'reactstrap';
import ModalCall from './callmodal'

class ContactAside extends Component {
  constructor (props) {
    super(props);
    this.state= {
      modalAside: false,
    }
  this.openModal = this.openModal.bind(this);
    
  }
  openModal() {
    this.setState({
      modalAside: !this.state.modalAside,
    });
  }  
  render () {
    return ( 
      <Container className="contact">
      <ModalCall modal={this.state.modalAside} onClick={this.openModal}/>
        <Row>
          <Col>
          <img className="icon full" src="https://png.icons8.com/windows/60/ffffff/contacts.png" alt=""/>
          <img className="icon mobile" src="https://png.icons8.com/windows/60/000000/contacts.png" alt=""/>
          </Col>
        </Row>

        <Row>
          <Col>
            <a href="tel:+1-206-353-9012"><h5>(206) 353-9012</h5></a>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="mailto:info@ocdcrew.com" >
            <img className="icon full" src="https://png.icons8.com/ios/40/ffffff/email-filled.png" alt="" />
            <img className="icon mobile" src="https://png.icons8.com/ios/40/000000/email-filled.png" alt="" />
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>info@ocdcrew.com</h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button  className="callme"  onClick={this.openModal}>Request A Call</Button>
          </Col>
        </Row>
        {/* --------------------------------------------- */}
        <Row className="contactheading">
          <Col>
            <img className="icon mobile" src="https://png.icons8.com/ios/30/000000/clock.png" alt="" />
            <img className="icon full" src="https://png.icons8.com/ios/30/ffffff/clock.png" alt="" />
            <h5>When We Work</h5>
          </Col>
          
        </Row>
        <Row>
            <Col>
              <h6>Mon - Fri</h6>
            </Col>
            <Col >
              <h6>9am - 4:30pm</h6>
            </Col>
        </Row>
        <Row>
            <Col >
              <h6>Sat - Sun</h6>
            </Col>
            <Col >
              <h6>By Request Only</h6>
            </Col>
        </Row>
        
        {/* ----------------------------------------------- */}
        <Row className="contactheading">
          <Col className="col-12">
            <img className="icon mobile" src="https://png.icons8.com/ios/30/000000/marker.png" alt="" />
            <img className="icon full" src="https://png.icons8.com/ios/30/ffffff/marker.png" alt="" />
            <h5>Where We Work</h5>
          </Col>
          
        </Row>
        <Row>
          <Col>
            <h6>
              West Seattle
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Downtown Seattle
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Magnolia
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Queen Anne
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
             Burien
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Renton
            </h6>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>
              Contact Us for <br />
              Other Areas
            </h6>
          </Col>
        </Row>
        {/* ------------------------------------------------------- */}
      </Container>
    );
  }

}
export default ContactAside;