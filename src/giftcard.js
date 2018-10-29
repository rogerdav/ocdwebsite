import React, { Component } from "react";
import './style/giftcard.css';
 
class GiftCard extends Component {
  render() {
    return (
      <div className="giftOfTime">
        <p className="contentheading">Give the Gift of Time</p>
        <div className="giftContent">
        <p>The gift of time is a thoughtfull gift, perfect for you partner, friends, family or collegues.</p>
        <p>They are great for :<br />
        &#8226; Birthdays<br />
        &#8226; Anniversaries<br />
        &#8226; Those with a busy schedule<br />
        &#8226; A newborn in the house<br />
        &#8226; Dealing with recovery from illness or Surgery</p>
        <p>Contact us to get a gift certificate that work best for their needs.</p>

        

        </div>
       
          
        
      </div>
    );
  }
}
 
export default GiftCard;