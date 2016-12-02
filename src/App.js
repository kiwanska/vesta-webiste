import React, {Component} from 'react';
import './styles/App.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
