

import './WikiFrame.css'
import Header from '../../components/Header';

import React, { Component } from 'react';
import Interweave from 'interweave';

class WikiFrame extends Component {

  transform = (node, children) => {
    if (node.tagName === 'A') {
      const title = node.getAttribute('title')
      const href = node.getAttribute('href')
      if (title && href) {
        if (href === `/wiki/${title.replaceAll(' ', '_')}`){
          return <a className="internal-link" href={href} title={title} onClick={this.handleClick}>{children}</a>;
        }
      }
    }
  }

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
        <Header text={this.props.pageTitle} />
        { <Interweave content={this.props.currHTML} transform={this.transform}/> }
      </div>
    );
  };
}

export default WikiFrame