import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth from '@material-ui/core/withWidth';

class Background extends Component {
  state = {
    cols: 1,
    images: [],
  }
  getCols() {
    const { width } = this.props;

    switch(width) {
      case 'sm':
        this.setState({cols: 1});
        break;
      case 'md':
        this.setState({cols: 2});
        break;
      case 'lg':
        this.setState({cols: 3});
        break;
      case 'xl':
        this.setState({cols: 4});
        break;
      default:
        this.setState({cols:1});
        break;
    }
  }
  //Fisher-Yates Shuffle Algorithm
  shuffleImages(images){
    var currentIndex = images.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }
    return images;
  }
  getImages = async () => {
    const shuffledImages = this.shuffleImages(['image1.JPG', 'image2.JPG', 'image3.JPG', 'image4.JPG', 'image5.JPG', 'image6.JPG', 'image7.JPG', 'image8.JPG', 'image9.JPG', 'image10.JPG']);
    var imagesToUse =  [];
    var imagesNeeded = 0;
    const { width } = this.props;

    switch(width) {
      case 'sm':
        imagesNeeded = 4;
        break;
      case 'md':
        imagesNeeded = 6;
        break;
      case 'lg':
        imagesNeeded = 9;
        break;
      case 'xl':
        imagesNeeded = 10;
        break;
      default:
        imagesNeeded = 4;
        break;
    }
    while(imagesToUse < imagesNeeded) {
      imagesToUse.push('../images/' + shuffledImages[imagesToUse.length]);
    }
    console.log(imagesToUse);
    const promises = imagesToUse.map(async (i) => await import(i));
    const images = await Promise.map(promises);

    this.setState({images: images});
  }
  render() {
    const style = {
      "zIndex": -1,
      "position": 'fixed',
    }
    this.getCols();
    this.getImages();
    return (
      <div style={style}>
        <GridList cellHeight={300} className="" cols={this.state.cols}>
          {this.state.images.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

export default withWidth()(Background);
