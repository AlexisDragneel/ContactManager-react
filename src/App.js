import React, { Component } from 'react';
import Contact from './Components/Contact';
import Header from './Components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact name="John Doe" email="jdo@gmail.com" phone="555-552-55" />
        <Contact name="Karen Smith" email="karen@gmail.com" phone="333-33-33" />
      </div>
    );
  }
}

export default App;
