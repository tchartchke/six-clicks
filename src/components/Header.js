import './Header.css';
import React from 'react';

const Header = props => {
  return(
    <div className="pageHead">
      {props.text}
    </div>
  );
}

export default Header