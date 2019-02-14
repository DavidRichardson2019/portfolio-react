import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import AppImages from '../data/AppImages.js';

class Contact extends Component {
  render() {
    let style= {
      wrapper: {
        'paddingTop':'5vh',
        'paddingBottom': '5vh',
        'height': 'auto',
        'backgroundColor': '#F1ECE9',
      },
      avatarWrapper: {
        'textAlign': 'center',
        'fontSize' : '1.5em',
        'margin': '1vw',
      },
      avatar: {
        'width': 200,
        'height': 200,
        'margin': 10,
        'borderWidth': 'thick',
        'borderStyle': 'solid',
        'borderColor': '#D7443F',
      },
      subtext: {
        margin: '3vw',
      }
    }
    return(
      <Grid style={style.wrapper} container direction="column" justify="space-evenly" alignItems="center">
        <h1 style={style.title}>I use the Internet</h1>
        <Grid container direction="row" justify="center" alignItems="center">
          <div style={style.avatarWrapper}><a href="https://github.com/DavidRichardson2019"><Avatar alt="" src={AppImages.contact.github.img} style={style.avatar}/></a>Check out my projects!</div>
          <div style={style.avatarWrapper}><a href="https://www.youtube.com/channel/UCaprf5plnAIh4oaf1zo7KUA"><Avatar alt="" src={AppImages.contact.youtube.img} style={style.avatar}/></a>Watch me crash drones!</div>
          <div style={style.avatarWrapper}><a href="mailto:david.richardson2019@gmail.com?Subject=Howdy%20David!"><Avatar alt="" src={AppImages.contact.gmail.img} style={style.avatar}/></a>Shoot me an e-mail!</div>
        </Grid>
        <Grid container direction="row" justify="space-between" alignItems="center">
          <h3 style={style.subtext}>David Richardson</h3>
          <h3 style={style.subtext}>david.richardson2019@gmail.com</h3>
        </Grid>
      </Grid>
    );
  }
}

export default Contact;
