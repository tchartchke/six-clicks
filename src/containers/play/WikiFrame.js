import React, { Component } from 'react';
import WikiContent from '../../components/WikiContent';
import parse from 'html-react-parser';

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
      console.log(data)
      this.setState( {
        html : data.parse.text
      })
    }).catch((e)=>console.log(e))
  }

  doSomething(data) {
    test = data;
    return data
  }
  
  render() {
    return(
      <div className="wiki-frame"> 
        {parse(this.state.html, { trim: true })}
      </div>
    );
  };
}

export default WikiFrame