import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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



class App extends Component {
  render() {
    return (
      <div className="App">
      <NavHeader />
      <img src="./pics/mandy.jpg" alt="" />
      <Container id="all">
      <div id="aside">
        <ContactAside />
      </div>
      <HashRouter>
        <div id="content" className="container row twelve">
        <Route exact path="/" component={AboutOcd} />
        <Route path="/reviews" component={Review}/>
        <Route exact path="/about" component={About} />
        </div>
      </HashRouter> 
      </Container>
      
      </div>
    );
  }
}

export default App;
