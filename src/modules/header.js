import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import profileImage from '../images/david-profile.jpg';
class Header extends Component {
  render(){
    let style = {
      wrapper: {
        'height': '95vh',
      },
      avatar: {
        'width': 200,
        'height': 200,
        'margin': 10,
        'borderWidth': 'thick',
        'borderStyle': 'solid',
        'borderColor': '#D7443F',
      },
      content: {
        'width': '45vw',
        'height': 'auto',
        'padding':'1vh',
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        'justifyContent': 'center',
        'textAlign': 'center',
        'borderRadius':'1vh',
        'backgroundColor':'#F1ECE9',
        'borderWidth': 'thick',
        'borderStyle': 'solid',
        'borderColor': '#D7443F',
      }
    }
    return(
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={style.wrapper}
      >
        <Avatar alt="" src={profileImage} style={style.avatar}/>
        <div style={style.content}>
          <h1>David Richardson</h1>
          <h3>Developer, Aspiring Designer, and Serial Hobbyst.</h3>
        </div>
      </Grid>
    );
  }
}
export default Header;
