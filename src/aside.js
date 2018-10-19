import React, { Component} from 'react';
import './aside.css';
import {Container, Row, Col} from 'reactstrap';

class ContactAside extends Component {
  render () {
    return ( 
      <Container className="contact">
        <Row>
          <Col>
            Contact
          </Col>
        </Row>
        <Row>
          for a free inhome estimate<br />
          call Mandy @ <br />
          <h1>206 3539012</h1>
        </Row>

      </Container>
    );
  }

}
export default ContactAside;