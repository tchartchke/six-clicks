

import './WikiFrame.css'

import React, { Component } from 'react';
import parse from 'html-react-parser';

class WikiFrame extends Component {

  handleClick = (e) => {
    e.preventDefault();
    const title = e.target.attributes.title.value
    if (this.missionComplete(title)){
      this.props.endGame(title)
    } else {
      window.scrollTo(0,0)
      this.props.next(title)
    }
  }

  missionComplete(nextPage){
    return this.props.end === nextPage
  }
  
  render() {

    return(
      <div className="wiki-frame"> 
        {
          parse(this.props.currHTML, 
          { 
            trim: true,
            replace: domNode => {
              if (domNode.name === 'a' && domNode.children[0] && domNode.attribs.title) {
                  return (
                    <a className="internal-link" href={domNode.attribs.href} title={domNode.attribs.title} onClick={this.handleClick}>
                      {domNode.children[0].data}
                    </a>
                  )
              }
            },
          })
        }
      </div>
    );
  };
}

export default WikiFrame