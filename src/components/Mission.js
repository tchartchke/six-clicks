//displays start page and end goal as links
import React from 'react';

const Mission = props => {
  return(
    <div className="mission">
      {props.start} to {props.end}
    </div>
  );
}

export default Mission