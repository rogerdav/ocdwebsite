import React, { Component} from 'react';
import './nav.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

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
      <Navbar color="success" light expand="md" >
          <NavbarBrand href="/">
          <h1 id="logo">OCDcrew llc</h1>
          </NavbarBrand>
          <div id="phonenumber"><p>(206)3539012</p></div>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem>
                      <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="/about">About</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href="/reviews">What other are saying</NavLink>
                  </NavItem>
              </Nav>
          </Collapse>
      </Navbar>
    )
  }
}

export default NavHeader;