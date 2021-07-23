// given int, prints number Clicks and stylized in div
import React from 'react';
import './ClickCounter.css';


const ClickCounter = props => {
  return(
    <div className="counter">
      <h3>Clicks</h3>
      <p>{props.clicks}</p>
    </div>
  );
}

export default ClickCounter