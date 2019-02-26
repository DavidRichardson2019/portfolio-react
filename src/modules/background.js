import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth from '@material-ui/core/withWidth';

const imageList = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg'];

class Background extends Component {
  state = {
    cols: 2,
    cellHeight: 50,
    numImages: 9,
    sizeClass: '',
    shuffledImages: imageList,
    images: [],
  }
  sizeChanged = () => {
    const { width } = this.props;
    const { sizeClass } = this.state;
    const height = window.screen.height;
    switch (width) {
      case 'xl':
        if (sizeClass !== 'xl') {
          this.setState({
            cols: 4,
            numImages: 16,
            sizeClass: 'xl'
          });

          this.importImages(16);
        }

        this.setState({
          cellHeight: height / 4
        });
        break;
      case 'lg':
        if (sizeClass !== 'lg') {
          this.setState({
            cols: 3,
            numImages: 9,
            sizeClass: 'lg'
          });

          this.importImages(9);
        }

        this.setState({
          cellHeight: height / 3
        });
        break;
      case 'md':
        if (sizeClass !== 'md') {
          this.setState({
            cols: 3,
            numImages: 9,
            sizeClass: 'md'
          });

          this.importImages(9);
        }

        this.setState({
          cellHeight: height / 3
        });
        break;
      case 'sm':
        if (sizeClass !== 'sm') {
          this.setState({
            cols: 3,
            numImages: 9,
            sizeClass: 'sm'
          });

          this.importImages(9);
        }

        this.setState({
          cellHeight: height / 3
        });
        break;
      case 'xs':
        if (sizeClass !== 'xs') {
          this.setState({
            cols: 2,
            numImages: 6,
            sizeClass: 'xs'
          });

          this.importImages(6);
        }

        this.setState({
          cellHeight: height / 3
        });
        break;
      default:
        return;
    }
  }
  importImages = async (numberToImport) => {
    const shuffledImages = this.shuffleImages();
    const promises = shuffledImages.map(async (image, i) => {
      if (i <= numberToImport) {
        return await import(`../images/${image}`);
      }
    });
    const imagesArr = await Promise.all(promises);
    // remove all undefined/null stuff
    const images = imagesArr.filter(a => !!a);

    this.setState({ images });
  }
  //Fisher-Yates Shuffle Algorithm
  shuffleImages = () => {
    var currentIndex = imageList.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = imageList[currentIndex];
      imageList[currentIndex] = imageList[randomIndex];
      imageList[randomIndex] = temporaryValue;
    }

    return imageList;
  }
  componentDidMount() {
    this.sizeChanged();
  }
  componentDidUpdate(prevProps){
    if(prevProps.width !== this.props.width){
      this.sizeChanged();
    }
  }
  render() {
    const style = {
      width:'100vw',
    }

    const { cellHeight, cols } = this.state;
    return (
      <div style={style}>
        <GridList cellHeight={cellHeight} className="" cols={cols}>
          {this.state.images.map(image => (
            <GridListTile cols={1} rows={1}>
              <img src={image.default} alt={''} />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

export default withWidth()(Background);
