import './Mission.css';
import React from 'react';

const Mission = props => {
  const { start, end } = props.mission
  return(
    <div className="mission">
      
      <h3>Mission</h3>
      <p>
        From
        <div><a className="missionPoint" href={`https://en.wikipedia.org/wiki/${start}`} rel="noreferrer" target="_blank">{start}</a></div>
        To
        <div><a className="missionPoint" href={`https://en.wikipedia.org/wiki/${end}`} rel="noreferrer" target="_blank">{end}</a></div>
        </p>
    </div>
  );
}

export default Mission