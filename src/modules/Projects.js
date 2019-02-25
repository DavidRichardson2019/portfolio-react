import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppImages from '../data/AppImages.js';
import withWidth from '@material-ui/core/withWidth';
import { withStyles, createStyles } from '@material-ui/core/styles';

const projectsStyle = ({breakpoints}: Theme) => createStyles({
  wrapper: {
    backgroundColor: '#A6A5A1',
    height:'auto',
  },
  title: {
    margin: '1vh',
    fontSize: '1.5em',
    marginBottom:'3vh',
    fontFamily: 'Righteous',
  },
  content: {},
  project: {
    width: '95vw',
    margin:'1vw',
    [breakpoints.down('sm')]: {
      flexDirection: "column",
    },
  },
  projectImgWrapper: {
    width:'95vw',
    height:'45vh',
    marginBottom: '1vh',
  },
  projectContent: {
    [breakpoints.up('md')]: {
      width: '55vw',
    }
  },
  projectTitle: {
    fontSize: '1.25em',
    margin: '1.5vh',
  },
  projectText: {
    fontSize: '1.05em',
    margin: '1.5vh 2.5vh',
  },
});
class Projects extends Component {
  getStyle = (key) => {
    const { width } = this.props;
    if(key === "3" && (width === 'xs' || width === 'sm')) {
      return {width: '100%'};
    }else {
      return {height: '100%'};
    }
  }
  render(){
    const { classes } = this.props;
    return(
      <div>
        <Grid className={classes.wrapper} container direction="column" justify="space-evenly" alignItems="center">
          <h1 className={classes.title}>Projects</h1>
          <Grid className={classes.contents} container direction="column" justify="space-evenly" alignItems="center">
            {AppImages.projects.map(project =>(
              <Grid className={classes.project} container direction="row" justify="center" alignItems="center">
                <Grid container justify="center" alignItems="center" className={classes.projectImgWrapper}>
                  <img
                    style={this.getStyle(project.key)}
                    src={project.img} alt=""></img>
                </Grid>
                <Grid className={classes.projectContent} container direction="column" justify="space-evenly" alignItems="center">
                  <h3 className={classes.projectTitle}>{project.title}</h3>
                  <p className={classes.projectText}>{project.text}</p>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    );
  };
}
Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withWidth()(withStyles(projectsStyle)(Projects));
