import React, { Component } from "react";
import { Button} from 'reactstrap';
import './style/workforus.css';
import ModalEmployment from './employmodal';

 
class Employment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalEmploy: false,
      resume: [],
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
        <p className="contentheading">Work for Us</p>
        
        <p>
          If you are looking for a company that will view you as an asset.<br />
          You love cleaning and are built with attention to detail.<br />
          Please send us your resume.
        </p>
        <Button onClick={this.openModal} className="applyButton">Apply now</Button>
          
        
      </div>
    );
  }
}
 
export default Employment;