import React, { Component } from 'react';
import HeaderBackground from './background.js';
import Header from './header.js';
import AboutMe from './Aboutme.js';
import Programming from './Programming.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import { Parallax, Background } from 'react-parallax';

class App extends Component {
  render() {
    const style = {
      width: '100vw',
    }
    return (
      <div>
        <Parallax blur={{ min: -15, max: 15 }}>
          <Header />
          <Background>
            <HeaderBackground/>
          </Background>
        </Parallax>
        <AboutMe />
        <Programming />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
