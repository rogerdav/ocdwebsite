import React, { Component} from 'react';
import './nav.css'
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
      <Navbar id="fixednavbar" light expand="sm" fixed={`top`} >
          <NavbarBrand href="/">
          <div id="logo"><h1>OCD Crew</h1><h5>Organizing, Cleaning and Detailing</h5></div>
          </NavbarBrand>
          <div id="phonenumber"><p>For a free estimate call</p> <p className="phone">(206)3539012</p></div>
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
                      <NavLink to="/reviews">What other's say</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/services">Services</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>

      </HashRouter>
    )
  }
}

export default NavHeader;