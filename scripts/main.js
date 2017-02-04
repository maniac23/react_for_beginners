import React from 'react';
import {render } from 'react-dom';
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;

var createBrowserHistory = require('history/lib/createBrowserHistory');

// import components
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';
import Fish from './components/Fish';
import AddFishForm from './components/AddFishForm';
import App from './components/App';

// routes
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);


render(routes, document.querySelector('#main')); 