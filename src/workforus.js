import React, { Component } from "react";
import { Container, Row, Col, Button} from 'reactstrap';
import './style/services.css';
import ModalEmployment from './employmodal';

 
class Employment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalEmploy: false,
    }
  this.openModal = this.openModal.bind(this);
    
  }
  openModal() {
    this.setState({
      modalEmploy: !this.state.modalEmploy,
    });
  }  
  render() {
    return (
      <div className="employment">
        <ModalEmployment modal={this.state.modalEmploy} onClick={this.openModal}/>
        <h2>Work for us</h2>
        <h5>Blurb about what it is</h5>
        <Button onClick={this.openModal} >Apply now</Button>
          
        
      </div>
    );
  }
}
 
export default Employment;