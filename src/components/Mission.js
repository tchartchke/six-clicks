//displays start page and end goal as links
import './Mission.css';
import React from 'react';

const Mission = props => {
  const { start, end } = props.mission
  return(
    <div className="mission">
      
      <h3>Mission</h3>
      <p>
        From
        <div><a className="missionPoint" href={`https://en.wikipedia.org/wiki/${start}`} target="_blank">{start}</a></div>
        To
        <div><a className="missionPoint" href={`https://en.wikipedia.org/wiki/${end}`} target="_blank">{end}</a></div>
        </p>
    </div>
  );
}

export default Mission




// <a href={`https://en.wikipedia.org/wiki/${page}`} key={id} target="_blank">{page}</a>
// <a href={`https://en.wikipedia.org/wiki/${page}`} key={id} target="_blank">{page}</a>