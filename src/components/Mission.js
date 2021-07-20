//displays start page and end goal as links
import React from 'react';

const Mission = props => {
  return(
    <div className="mission">
      {props.mission.start} to {props.mission.end}
    </div>
  );
}

export default Mission