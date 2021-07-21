import React, { Component } from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class WikiFrame extends Component {
  constructor(props) {
    super();
    this.state = { html : ''};
    this.getHTML(props.pageTitle);
  }

  getHTML(pageTitle){
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&page=${pageTitle}&prop=text&formatversion=2&format=json&origin=*`)
    .then(response => response.json())
    .then(data => {
      this.setState( {
        html : data.parse.text
      })
    }).catch((e)=>console.log(e))
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    const title = e.target.attributes.title.value
    this.getHTML(title)
    //increase page count
  } 
  
  render() {

    return(
      <div className="wiki-frame"> 
        {
          parse(this.state.html, 
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