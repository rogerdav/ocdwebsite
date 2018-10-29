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
        <p className="contentheading">Work for us</p>
        <p>
        We are a full service cleaning company built for the now. We partner with our clients to help them in their busy lives to ensure they have the time for what matters most to them.
        </p>
        
        <p>
          If you are looking for a company that will view you as an asset,<br />
          love cleaning and are built with an attention to detail.<br />
          Then send us your resume to be considered for a position with us.
        </p>
        <Button onClick={this.openModal} className="applyButton">Apply now</Button>
          
        
      </div>
    );
  }
}
 
export default Employment;