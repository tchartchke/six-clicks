// given int, prints number Clicks and stylized in div
import React from 'react';

const ClickCounter = props => {
  return(
    <div className="counter">
      Clicks: {props.clicks}
    </div>
  );
}

export default ClickCounter