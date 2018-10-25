import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import sendEmail from './sendemail';
import './style/workforus.css';


class ModalEmployment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      name: '',
      phone_number: '',
      email: '',
      canwork: false,
      message: '',
      file: '',
      submitted: false,
      resume: [],
      subject: 'Job Application',

      
    };

    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.submitApplication = this.submitApplication.bind(this);
  }

  toggle() {
    this.props.onClick();
  }
  handleChecked() {
    this.setState({
      canwork: !this.state.canwork})
  }

  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
    
  }

  submitApplication() {
    let fileArray = this.state.message.split('\n');
    this.setState(prevState => ({
      resume : fileArray,
      message: '',
     }), function() {
       this.toggle();
       sendEmail(this.state);
      
     })
   
  }

  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Apply Now</ModalHeader>
          <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="name required" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="phone_number">Phone Number</Label>
                  <Input type="text" name="phone_number" id="phone_number" placeholder="phone number required" onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="email optional" onChange={this.handleInputChange}/>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" id="canwork" onClick={this.handleChecked} />
                      Are you eligible to work in US?
                  </Label>
                </FormGroup>
                <FormGroup className="upload">
                  <Label for="message">Copy and Paste resume below / Tell us about your work history</Label>
                  <Input type="textarea" name="message" id="message" placeholder="Any additional info" onChange={this.handleInputChange} />
                </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitApplication}>Submit Application</Button>
            <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalEmployment;