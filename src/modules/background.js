import React, { Component } from 'react';
import tileData from '../data/tileData';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class Background extends Component {
  getCols(){
    console.log("getCols");
    console.log(isWidthUp('xs', window.innerWidth));
    if(isWidthUp('xl', window.innerWidth)){
      console.log('4');
      return 4;
    }
    else if(isWidthUp('md', window.innerWidth)){
      console.log('3');
      return 3;
    }
    else if(isWidthUp('sm', window.innerWidth)){
      console.log('2');
      return 2;
    }
    else if(isWidthUp('xs', window.innerWidth)){
      console.log('1');
      return 1;
    }

  }
  render() {
    return (
      <div>
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

export default Background;
