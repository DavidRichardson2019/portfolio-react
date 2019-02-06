import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';

import img from '../images/languages.png';
class Programming extends Component {
  render(){
    let style = {
      wrapper: {
        'paddingTop':'5vh',
        'paddingBottom': '5vh',
        'height': 'auto',
        'backgroundColor': '#F1ECE9',
      },
      content: {
        'height': 'auto',
        'width': '100%',
        'width': '100%',
      },
      img: {
        'width':'30vh',
        'height':'30vh',
      },
      textWrap: {
        'width':'95vw',
        'textAlign': 'left',
      },
    }
    return(
      <div>
        <Grid container direction="column" justify="space-evenly" alignItems="center" style={style.wrapper}>
          <h1>Programming</h1>
          <Grid container direction="column" justify="space-evenly" alignItems="center" style={style.content}>
            <img src={img} style={style.img}/>
            <Grid direction="column" justify="center" alignItems="flex-start" style={style.textWrap}>
              <h3>Programming Style</h3>
              <p>To me, style is a verry important part of being a developer. Not only in the style of the GUI, but also in the style of the code. Code is like a work of art, there are a million ways to solve a problem with code and it's up to your personal style to find your solution. I like to make my code as neat and readable as possible, that is one of my first priorities because as a developer in the professional world if you leave a project it needs to be clean for the next developer. In web, I also prioritise responsiveness. In this mobile world we live in it's verry imortant that apps and websites work for everyone.</p>
              <h3>Languages</h3>
              <ul>
                <li>Python</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Swift</li>
                <li>React.js</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Programming;
