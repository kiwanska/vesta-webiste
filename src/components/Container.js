import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Container({ children }) {

    return (

      <div className="app">
        <Navbar />
        {children}
        <Footer />
      </div>
    
    )
}

export default Container;