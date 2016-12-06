import React, {Component} from 'react';
import { Router, Route, hashHistory, Link } from 'react-router';

class Router extends Component {
  render() {
    return (

      <Router history={hashHistory}>
        <Route path="/" component={Main} >
          <Route path="co-robimy" component={News} />
          <Route path="jak-nas-wesprzec" component={Support} />
          <Route path="dane-stowarzyszenia" component={Organization} />
          <Route path="kontakt" component={Contact} />
        </Route>
      </Router>

    )
  }
}

export default Router;
