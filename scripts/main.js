import React from 'react';
import {render } from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

// import components
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import App from './components/App';

// routes
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

render(routes, document.querySelector('#main')); 