import React, {Component} from 'react';
import img from '../images/ilu.png';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <img src={img} className="main-img" />
        <h1 className="main-tagline">Stowarzyszenie wspierające rozwój i&nbsp;funkcjonowanie rodziny VESTA</h1>
      </div>
    )
  }
}

export default Main;
