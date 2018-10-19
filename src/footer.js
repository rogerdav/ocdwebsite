import React, { Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import './footer.css';

class PageFooter extends Component {

  render() {
    return (
      <div className="pagefooter" fixed={`bottom`}>
          <h1>(206) 353-9012</h1>
          <p>
            Call today for a free estimate!
          </p>
          
    
      </div>
    )
  }

}

export default PageFooter;