import React, {Component} from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router';


class Menu extends Component {

  // const { route } = this.props;

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <ul>
            <li><Link to="/co-robimy">Co robimy?</Link></li>
            <li><a>Jak nas wesprzeć?</a></li>
            <li className="logo"><Link to="/"><img src={logo} className="logo-img" alt="logo" /></Link></li>
            <li><a>Dane stowarzyszenia</a></li>
            <li><a>Kontakt</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
