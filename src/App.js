import React, {Component} from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './styles/App.scss';
import Main from './components/Main';
import News from './components/News';
import Contact from './components/Contact';
import Support from './components/Support';
import Organization from './components/Organization';
import Container from './components/Container';

class App extends Component {
  render() {
    return (

      <Router history={browserHistory}>
        <Route path="/" component={Container} >
          <IndexRoute component={Main} />
          <Route path="co-robimy" component={News} />
          <Route path="jak-nas-wesprzec" component={Support} />
          <Route path="dane-stowarzyszenia" component={Organization} />
          <Route path="kontakt" component={Contact} />
        </Route>
      </Router>
    )
  }
}

export default App;
