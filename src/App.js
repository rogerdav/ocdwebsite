import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer';
import NavHeader from './nav';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavHeader />
      <Footer />
      </div>
    );
  }
}

export default App;
