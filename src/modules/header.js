import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import profileImage from '../images/david-profile.jpg';
import { withStyles, createStyles } from '@material-ui/core/styles';

const headerStyle = ({breakpoints}: Theme) => createStyles({
  wrapper: {
    [breakpoints.up('xs')]: {
      height: '98vh',
    },
    [breakpoints.up('md')]: {
      height: '95vh',
    },
  },
  avatar: {
    [breakpoints.up('xs')]: {
      width:'43vw',
      height:'43vw',
    },
    [breakpoints.up('md')]: {
      width: '15vw',
      height: '15vw',
    },
    margin: 10,
    borderWidth: 'thick',
    borderStyle: 'solid',
    borderColor: '#D7443F',
  },
  content: {
    [breakpoints.up('xs')]: {
      width:'85vw',
    },
    [breakpoints.up('md')]: {
      width:'45vw',
    },
    height: 'auto',
    padding:'1vh',
    textAlign: 'center',
    borderRadius:'1vh',
    backgroundColor:'#F1ECE9',
    borderWidth: 'thick',
    borderStyle: 'solid',
    borderColor: '#D7443F',
  },
});

class Header extends Component {
  render(){
    const { classes } = this.props;
    return(
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.wrapper}
      >
        <Avatar alt="" src={profileImage} className={classes.avatar}/>
        <Grid
         container
         direction="column"
         justify="space-evenly"
         alignItems="center"
         className={classes.content}>
          <h1>David Richardson</h1>
          <h3>Developer, Aspiring Designer, and Serial Hobbyst.</h3>
        </Grid>
      </Grid>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerStyle)(Header);
