import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import sendEmail from './sendemail';
import './style/callmodal.css';

class ModalCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      name: '',
      phone_number: '',
      email: '',
      time: '',
      message: '',
      submitted: false,
      subject: 'Call Request',
      zip_code: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.submitCallRequest = this.submitCallRequest.bind(this);
    this.resetState = this.resetState.bind(this);
    
  }

  toggle() {
    this.props.onClick();
  }
  
  submitCallRequest(callback) {
   
    sendEmail(this.state);
    callback();
  }
  resetState() {
     
    this.setState({
      date: '',
      name: '',
      phone_number: '',
      email: '',
      time: '',
      message: '',
      submitted: true,
      subject: 'Call Request',
      zip_code: '',
    });
    this.toggle();

  }
  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
    
  }

  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Request A Call</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="name required" 
                onChange={this.handleInputChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="phone_number">Phone Number</Label>
              <Input type="tel" 
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                      name="phone_number" 
                      id="phone_number" 
                      placeholder="123-456-7890" onChange={this.handleInputChange} />
              <p className="invalidstatement">That is an invalid format</p>
            </FormGroup>
            <FormGroup>
              <Label for="zip_code">Zip Code</Label>
              <Input type="tel" 
                      pattern="[0-9]{5}" 
                      name="zip_code" 
                      id="zip_code" 
                      placeholder="00000" onChange={this.handleInputChange} />
              <p className="invalidstatement">That is an invalid format</p>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="email optional" 
                onChange={this.handleInputChange}/>
                <p className="invalidstatement">That is an invalid format</p>
            </FormGroup>
            <FormGroup>
              <Label for="time">Best Time To Call</Label>
              <Input 
                type="text" 
                name="time" 
                id="time" 
                placeholder="best time to call during business hours" 
                onChange={this.handleInputChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input 
                type="textarea" 
                name="message" 
                id="message" 
                placeholder="Any additional info" 
                onChange={this.handleInputChange}/>
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button 
              className="submitbutton"
              color="primary" 
              onClick={() => this.submitCallRequest(this.resetState)}>Submit Request</Button>
            <Button color="secondary" onClick={this.resetState}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalCall;