import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';
import Footer from './footer';
import NavHeader from './nav';
import Review from './reviews';
import About from './aboutmandy';
import ContactAside from './aside';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Container} from 'reactstrap';
import AboutOcd from './aboutocd';
import PageFooter from './footer';
import Services from './services';
import Employment from './workforus';




class App extends Component {
  render() {
    return (
      <div className="App">
      <NavHeader />
      
      <Container id="all">
      <div id="aside">
        <ContactAside />
      </div>
      <HashRouter>
        <div id="content" className="container row twelve">
        <Route exact path="/" component={AboutOcd} />
        <Route path="/reviews" component={Review}/>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/employment" component={Employment} />
        </div>
      </HashRouter> 
      </Container>
      <PageFooter />
      
      </div>
    );
  }
}

export default App;
