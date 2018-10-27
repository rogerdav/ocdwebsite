import React, { Component } from 'react';

import './style/App.css';
import NavHeader from './nav';
import Review from './reviews';
import About from './aboutmandy';
import ContactAside from './aside';
import {
  Route,
  HashRouter
} from "react-router-dom";
import { Container} from 'reactstrap';
import AboutOcd from './aboutocd';
import PageFooter from './footer';
import Services from './services';
import Employment from './workforus';
import GiftCard from './giftcard';




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
        <div id="content" className="container">
        <Route exact path="/" component={AboutOcd} />
        <Route path="/reviews" component={Review}/>
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/employment" component={Employment} />
        <Route path="/giftcard" component={GiftCard} />
        </div>
      </HashRouter> 
        <div className="mobilePhoneHeading">
          <h1>(206) 353-9012</h1>
            <p>
              Call today for a free estimate!
            </p>
        </div>
      </Container>
      <PageFooter />
      
      </div>
    );
  }
}

export default App;
