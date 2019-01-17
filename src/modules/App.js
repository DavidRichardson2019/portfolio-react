import React, { Component } from 'react';
import Background from './background.js';
import Header from './header.js';
class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <Header />
      </div>
    );
  }
}

export default App;
