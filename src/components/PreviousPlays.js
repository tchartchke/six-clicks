import React from 'react';

const PreviousPlays = (props) => (
  <div>
    <h1>Previously Played Missions</h1>
    {props.plays.map(play => 
      <div>
        {play.name} - {play.start} to {play.end} : {play.clicks}
      </div>
    )}
  </div>
)

export default PreviousPlays