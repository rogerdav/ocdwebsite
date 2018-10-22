import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ModalCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.props.onClick();
  }

  render() {
    return (
      <div>
        {/* <hello></hello> */}
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Request A Call</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="name required" />
            </FormGroup>
            <FormGroup>
              <Label for="phone_number">Phone Number</Label>
              <Input type="text" name="phone_number" id="phone_number" placeholder="phone number required" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email optional" />
            </FormGroup>
            <FormGroup>
              <Label for="time">Best Time To Call</Label>
              <Input type="text" name="time" id="time" placeholder="bet time to call during business hours" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" placeholder="Any additional info" />
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Submit Request</Button>
            <Button color="secondary" onClick={this.props.onClick}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalCall;