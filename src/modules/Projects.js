import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import projectsData from '../data/projectsData.js';

class Projects extends Component {
  render(){
    const style = {
      wrapper: {
        'backgroundColor': '#A6A5A1',
        'height':'auto',
      },
      title: {
        'margin': '1vh',
        'fontSize': '1.5em',
        'marginBottom':'3vh',
        'fontFamily': 'Righteous',
      },
      content: {},
      project: {
        'width': '95vw',
        'margin':'1vw',
      },
      projectImg: {
        'height':'35vh',
        'marginBottom': '1vh',
      },
      projectContent: {
        'width': '55vw',
      },
      projectTitle: {
        'fontSize': '1.25em',
        'margin': '1.5vh',
      },
      projectText: {
        'fontSize': '1.05em',
        'margin': '1.5vh 2.5vh',
      },
    }
    return(
      <div>
        <Grid style={style.wrapper} container direction="column" justify="space-evenly" alignItems="center">
          <h1 style={style.title}>Projects</h1>
          <Grid style={style.contents} container direction="column" justify="space-evenly" alignItems="center">
            {projectsData.map(project =>(
              <Grid style={style.project} container direction="row" justify="center" alignItems="center">
                <img style={style.projectImg} src={project.img} alt=""></img>
                <Grid style={style.projectContent} container direction="column" justify="space-evenly" alignItems="center">
                  <h3 style={style.projectTitle}>{project.title}</h3>
                  <p style={style.projectText}>{project.text}</p>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  };
}
export default Projects;
