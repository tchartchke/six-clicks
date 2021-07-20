import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/reducers/reducer'

import App from './App';
import RulesFrame from './containers/RulesFrame'
import PlayContainer from './containers/play/PlayContainer'

let store = createStore(reducer);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Route exact path="/" component={App} />
      <Route exact path="/rules" component={RulesFrame} />
      <Route exact path="/play" component={PlayContainer} />

    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
