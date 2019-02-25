import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AppImages from '../data/AppImages.js';
import { withStyles, createStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const contactStyles = ({breakpoints}: Theme) => createStyles({
  wrapper: {
    paddingTop:'5vh',
    paddingBottom: '5vh',
    height: 'auto',
    backgroundColor: '#F1ECE9',
  },
  avatarWrapper: {
    width: '30vw',
    textAlign: 'center',
    fontSize: '1.5em',
    margin: '1vw',
  },
  avatar: {
    [breakpoints.up('xs')]: {
      width: '25vw',
      height: '25vw',
    },
    [breakpoints.up('md')]: {
      width: '20vw',
      height: '20vw',
    },
    margin: 10,
    borderWidth: 'thick',
    borderStyle: 'solid',
    borderColor: '#D7443F',
  },
  subtext: {
    margin: '3vw',
  }
});
class Contact extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Grid className={classes.wrapper} container direction="column" justify="space-evenly" alignItems="center">
        <h1 className={classes.title}>I use the Internet</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid container direction="column" justify="center" alignItems="center" className={classes.avatarWrapper}><a href="https://github.com/DavidRichardson2019"><Avatar alt="" src={AppImages.contact.github.img} className={classes.avatar}/></a><p className={classes.linkText}>GitHub</p></Grid>
          <Grid container direction="column" justify="center" alignItems="center" className={classes.avatarWrapper}><a href="https://www.youtube.com/channel/UCaprf5plnAIh4oaf1zo7KUA"><Avatar alt="" src={AppImages.contact.youtube.img} className={classes.avatar}/></a><p className={classes.linkText}>YouTube</p></Grid>
          <Grid container direction="column" justify="center" alignItems="center" className={classes.avatarWrapper}><a href="mailto:david.richardson2019@gmail.com?Subject=Howdy%20David!"><Avatar alt="" src={AppImages.contact.gmail.img} className={classes.avatar}/></a><p className={classes.linkText}>E-Mail</p></Grid>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <h3 className={classes.subtext}>David Richardson</h3>
          <h3 className={classes.subtext}>david.richardson2019@gmail.com</h3>
        </Grid>
      </Grid>
    );
  }
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(contactStyles)(Contact);
