import React, {Component} from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router';


class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="container">
          <ul>
            <li><Link to="/co-robimy" activeClassName="active">Co robimy?</Link></li>
            <li><Link to="/jak-nas-wesprzec" activeClassName="active">Jak nas wesprzeć?</Link></li>
            <li className="logo"><Link to="/"><img src={logo} className="logo-img" alt="logo" /></Link></li>
            <li><Link to="/dane-stowarzyszenia" activeClassName="active">Dane stowarzyszenia</Link></li>
            <li><Link to="/kontakt" activeClassName="active">Kontakt</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
