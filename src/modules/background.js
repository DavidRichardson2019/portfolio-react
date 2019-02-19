import React, { Component } from 'react';
//import tileData from '../data/tileData';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import image7 from '../images/image7.jpg';
import image8 from '../images/image8.jpg';
import image9 from '../images/image9.jpg';
import image10 from '../images/image10.jpg';
import image11 from '../images/image1.jpg';
import image12 from '../images/image2.jpg';
import image13 from '../images/image3.jpg';
import image14 from '../images/image4.jpg';
import image15 from '../images/image5.jpg';
import image16 from '../images/image5.jpg';
class Background extends Component {
  state = {
    cols: 2,
    cellHeight: 300,
    numImages: 9,
    sizeClass: '',
    shuffledImages: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg'],
    images: [],
  }
  sizeChanged = () => {
    if(isWidthUp('xl', this.props.width)){
      if(this.state.sizeClass !== 'xl') {
        this.setState({cols:4});
        this.setState({numImages:16});
        this.getImages();
        this.setState({sizeClass: 'xl'});
      }
      this.setState({cellHeight:this.props.height / 4});
    }
    else if(isWidthUp('sm', this.props.width)){
      if(this.state.sizeClass !== 'sm') {
        this.setState({cols:3});
        this.setState({numImages:9});
        this.getImages();
        this.setState({sizeClass:'sm'});
      }
      this.setState({cellHeight:this.props.height / 3});
    }
    else if(isWidthUp('xs', this.props.width)){
      if(this.state.sizeClass !== 'xs') {
        this.setState({cols:2});
        this.setState({numImages:6});
        this.getImages();
        this.setState({sizeClass:'xs'});
      }
      this.setState({cellHeight:this.props.height / 3});
    }
  }
  getImages = () => {
    var imagesToImport = [];
    for(var i = 0; i < this.state.numImages; i++){
      imagesToImport.push('../images/' + this.state.shuffledImages[i]);
    }
    this.importImages(imagesToImport);
  }
  importImages = async (imagesToImport) => {
    console.log(imagesToImport);
    const promises = imagesToImport.map(async (i) => await import(i));
    const images = await Promise.all(promises);
    this.setState({images: images});
  }
  //Fisher-Yates Shuffle Algorithm
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  componentDidMount() {
    const imagesToShuffle = ['image1.JPG', 'image2.JPG', 'image3.JPG', 'image4.JPG', 'image5.JPG', 'image6.JPG', 'image7.JPG', 'image8.JPG', 'image9.JPG', 'image10.JPG', 'image11.JPG', 'image12.JPG', 'image13.JPG', 'image14.JPG', 'image15.JPG', 'image16.JPG'];
    const shuffledImages = this.shuffle(imagesToShuffle);
    //this.setState({shuffledImages: shuffledImages});
    this.sizeChanged();
  }
  componentDidUpdate(prevProps){
    if(prevProps.width !== this.props.width){
      this.sizeChanged();
    }
  }
  render() {
    const style = {
      "zIndex": -1,
      "position": 'fixed',
    }
    return (
      <div style={style}>
        <GridList cellHeight={this.state.cellHeight} className="" cols={this.state.cols}>
          {this.state.images.map(image => (
            <GridListTile cols={1} rows={1}>
              <img src={image} alt={''} />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

export default withWidth()(Background);
