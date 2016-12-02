import React, {Component} from 'react';
import logo from '../images/logo.svg';

class Menu extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <ul>
            <li><a>Co robimy?</a></li>
            <li><a>Jak nas wesprzeć?</a></li>
            <li className="logo"><a><img src={logo} className="logo-img" alt="logo" /></a></li>
            <li><a>Dane stowarzyszenia</a></li>
            <li><a>Kontakt</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
