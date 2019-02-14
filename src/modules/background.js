import React, { Component } from 'react';
import tileData from '../data/tileData';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class Background extends Component {
  constructor(props){
    super(props);
  }
  getCols(){
    if(isWidthUp('xl', this.props.width)){
      console.log('4');
      return 4;
    }
    else if(isWidthUp('md', this.props.width)){
      console.log('3');
      return 3;
    }
    else if(isWidthUp('sm', this.props.width)){
      console.log('2');
      return 2;
    }
    else if(isWidthUp('xs', this.props.width)){
      console.log('1');
      return 1;
    }

  }
  render() {
    const style = {
      "zIndex": -1,
      "position": 'fixed',
    }
    return (
      <div style={style}>
        <GridList cellHeight={300} className="" cols={this.getCols()}>
          {tileData.map(tile => (
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
