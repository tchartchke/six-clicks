

import './WikiFrame.css'
import Header from '../../components/Header';

import React, { Component } from 'react';
// import parse from 'html-react-parser';
import Interweave, { Node } from 'interweave';

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
    // debugger;
    return(
      <div className="wiki-frame"> 
        
        <Header text={this.props.pageTitle} />
        {/* {
          parse(this.props.currHTML, 
          { 
            trim: true,
            replace: domNode => {
              if (domNode.name === 'style'){
                return (<div></div>);
              }
              // try to remove the style={} in the nodes
              // if (domNode.attribs.style){
              //   delete domNode.attribs.style
              // }
              if (domNode.name === 'a' && domNode.children[0] && domNode.attribs.title && domNode.attribs.href && domNode.attribs.href === `/wiki/${domNode.attribs.title.replaceAll(' ', "_")}`) {
                  return (
                    <a className="internal-link" href={domNode.attribs.href} title={domNode.attribs.title} onClick={this.handleClick}>
                      {domNode.children[0].data}
                    </a>
                  )
              }
            },
          })
        } */}

        {/* {<div dangerouslySetInnerHTML={{__html: this.props.currHTML}} />} */}

        { <Interweave content={this.props.currHTML} transform={this.transform}/> }
      </div>
    );
  };
}

export default WikiFrame