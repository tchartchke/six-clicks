import React, { Component } from 'react';
import Iframe from 'react-iframe'

class WikiFrame extends Component {

  render() {

  // https://en.wikipedia.org/w/index.php?action=render&title=Main_Page
    return(
      <div>
        <Iframe url="https://en.wikipedia.org/w/index.php?action=render&title=Main_Page"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>

      </div>
    );
  };
}

export default WikiFrame