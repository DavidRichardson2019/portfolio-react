import React, { Component } from 'react';
import Background from './background.js';
import Header from './header.js';
import AboutMe from './Aboutme.js';
import Programming from './Programming.js';
import Projects from './Projects.js';
class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <Header />
        <AboutMe />
        <Programming />
        <Projects />
      </div>
    );
  }
}

export default App;
