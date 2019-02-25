import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import img1 from '../images/longboard.jpg'
import img2 from '../images/jeep.jpg'
import img3 from '../images/quadcopter.jpg'
import { withStyles, createStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import PropTypes from 'prop-types';
const aboutMeStyle = ({breakpoints}: Theme) => createStyles({
  wrapper: {
    paddingTop:'5vh',
    paddingBottom: '5vh',
    height: 'auto',
    backgroundColor: '#A6A5A1',
  },
  content: {
    height: 'auto',
    width: '100%',
  },
  imageWrapper: {
    [breakpoints.up('xs')]: {
      width:'95vw',
    },
    [breakpoints.up('md')]: {
      width: '35vw',
    },
  },
  avatar: {
    [breakpoints.up('xs')]: {
      width: '43vw',
      height: '43vw',
    },
    [breakpoints.up('md')]: {
      width: '15vw',
      height: '15vw',
    },
    margin: '.5vh',
    borderWidth: 'thick',
    borderStyle: 'solid',
    borderColor: '#D7443F',
  },
  title: {
    margin: '1.5vh',
    fontSize: '1.25em',
  },
  paragraph: {
    margin: '1.5vh 2.5vh',
    fontSize: '1.05em',
  },
  aboutMeText: {
    [breakpoints.up('xs')]: {
      width: '95vw',
    },
    [breakpoints.up('md')]: {
      width: '60vw',
    },
    width: '60vw',
    textAlign: 'left',
  },
});
class Aboutme extends Component {
  state = {
    contentDirection: "column",
    imageWrapperDirection: "row",
    sizeClass: "medium",
  }
  sizeChanged = () => {
    const { width } = this.props;
    const { sizeClass } = this.state;
    switch(width) {
      case 'xl':
        if(sizeClass !== 'xl'){
          this.setState({imageWrapperDirection: "column", contentDirection: "row", sizeClass: "xl"});
        }
        break;
      case 'lg':
        if(sizeClass !== 'lg'){
          this.setState({imageWrapperDirection: "column", contentDirection: "row", sizeClass: "lg"});
        }
        break;
      case 'md':
        if(sizeClass !== 'md'){
          this.setState({imageWrapperDirection: "column", contentDirection: "row", sizeClass: "md"});
        }
        break;
      case 'sm':
        if(sizeClass !== 'sm'){
          this.setState({imageWrapperDirection: "row", contentDirection: "column", sizeClass: "sm"});
        }
        break;
      case 'xs':
        if(sizeClass !== 'xs'){
          this.setState({imageWrapperDirection: "row", contentDirection: "column", sizeClass: "xs"});
        }
        break;
      default:
        return;
    }
  }
  componentDidMount() {
    this.sizeChanged();
  }
  componentDidUpdate(prevProps){
    if(prevProps.width !== this.props.width){
      this.sizeChanged();
    }
  }
  render(){
    const { classes } = this.props;
    const { contentDirection, imageWrapperDirection } = this.state;
    return(
      <div>
        <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.wrapper}>
          <h1>About Me</h1>
          <Grid container direction={contentDirection} justify="space-evenly" alignItems="center" className={classes.content}>
            <Grid container direction={imageWrapperDirection} justify="space-evenly" alignItems="center" className={classes.imageWrapper}>
              <Avatar alt="" src={img1} className={classes.avatar}/>
              <Avatar alt="" src={img2} className={classes.avatar}/>
              <Avatar alt="" src={img3} className={classes.avatar}/>
            </Grid>
            <div className={classes.aboutMeText}>
              <h3 className={classes.title}>Serial Hobbyst</h3>
              <p className={classes.paragraph}>For as long as I can remember I have followed my dad through many hobbies. When I was a child he was constantly buying and selling things getting in and out of many hobbies, it's who we are. The majority of our hobbies have been RC related, we started out racing RC cars, then we sold that stuff and got into RC planes, then we sold all of that and got into helicopters, that's when I found racing drones. After that I have been hoocked on theese drones, I am more into the freestyle side. I build, configure, fix, fly, and edit my footage for youtube, and I love it all. I've also been in and out of downhill longboarding for a long time, and my family is starting to get into off-road Jeeping.</p>
              <h3 className={classes.title}>Development History</h3>
              <p className={classes.paragraph}>I have been programming since around 7th grade, I started out programming HTML in a class at school. After that I was hoocked, my method for a while was to just learn as much as possible. I wen't from language to language making as many projects as I could mostly following youtube videos. After a while I decided to start focusing more, I purhcased a MacBook and started using Swift to create iOS apps. I used swift for a couple of years, trying to learn as much about it as I could and making as many projects as possible. After that I decided to experiment with React.js, I have since been working on grasping that.</p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
Aboutme.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withWidth()(withStyles(aboutMeStyle)(Aboutme));
