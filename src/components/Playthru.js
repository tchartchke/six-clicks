import React from 'react';

const Playthru = (props) => (
  <tr>
    <td>{props.playthru.name}</td>
    <td>{props.playthru.start}</td>
    <td>{props.playthru.end}</td>
    <td>{props.playthru.clicks}</td>
  </tr>
);
export default Playthru