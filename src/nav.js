import React, { Component} from 'react';
import './style/nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import {
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
      <Navbar id="fixednavbar" light expand="xl">
          <NavbarBrand href="/">
          <div id="logo"><h1>OCD Crew</h1><h5>ORGANIZING, CLEANING AND DETAILING</h5></div>
          <div className="mobilePhoneHeading">
          <h1>(206) 353-9012</h1>
        </div>
          
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                  <NavItem>
                      <NavLink to="/" onClick={this.toggle}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/about" onClick={this.toggle}>About</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/reviews" onClick={this.toggle}>Reviews</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/services" onClick={this.toggle}>Services</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/giftcard" onClick={this.toggle}>Gift Certificates</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink to="/employment" onClick={this.toggle}>Work for Us</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>

      </HashRouter>
    )
  }
}

export default NavHeader;