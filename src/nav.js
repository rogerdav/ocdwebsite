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
      <Navbar id="fixednavbar"color="success" light expand="md" fixed={`top`} >
          <NavbarBrand href="/">
          <h1 id="logo">OCD crew</h1>
          </NavbarBrand>
          <div id="phonenumber"><span className="phone">(206)3539012</span></div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/reviews">What other are saying</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>

      </HashRouter>
    )
  }
}

export default NavHeader;