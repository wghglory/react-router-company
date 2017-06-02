import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './components/App';

// bootstrap core. specific plugin like jumbotron is imported in needed component.
import './bootstrap/_core.scss';
import './index.scss';

ReactDOM.render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/history" to="/about/history" />
        <Redirect from="/services" to="/about/services" />
        <Redirect from="/location" to="/about/location" />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('app')
);