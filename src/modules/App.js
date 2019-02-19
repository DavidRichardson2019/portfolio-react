import React, { Component } from 'react';
import Background from './background.js';
import Header from './Header.js';
import AboutMe from './Aboutme.js';
import Programming from './Programming.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div>
        <Background />
        <Header />
        <AboutMe />
        <Programming />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
