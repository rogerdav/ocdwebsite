import React, { Component} from 'react';
import './style/nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class NavHeader extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
  }
  render() {
    return(
      <HashRouter>
      <Navbar id="fixednavbar" light expand="lg" fixed={`top`} color="black" >
          <NavbarBrand href="/">
          <div id="logo"><h1>OCD Crew</h1><h5>ORGANIZING, CLEANING AND DETAILING</h5></div>
          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                  <NavItem>
                      <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/reviews">What Clients Say</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/services">Services</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/giftcard">Gift Certificates</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/employment">Work for Us</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>

      </HashRouter>
    )
  }
}

export default NavHeader;