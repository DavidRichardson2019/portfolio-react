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
      transform:'translate(0px,300px)',
    }
    return (
      <div>
        <Parallax strength={300}>
          <Header />
          <Background style={style}>
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
