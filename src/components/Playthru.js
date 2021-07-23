import React from 'react';

const Playthru = (props) => (
  <div>
    {props.playthru.name} - {props.playthru.start} to {props.playthru.end}: {props.playthru.clicks} Clicks
  </div>
);
export default Playthru