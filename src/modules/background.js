import React, { Component } from 'react';
import tileData from '../data/tileData';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Background extends Component {
  constructor(props){
    super(props);
    this.state = {cols: 3};
    this.checkBreakpoint = this.checkBreakpoint.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.checkBreakpoint());
  }
  checkBreakpoint(){
    if(window.innerWidth >= 870 && this.state.cols !== 3){
      this.setState({cols: 3});
    } else if(window.innerWidth < 870 && this.state.cols === 3){
      this.setState({cols: 2});
    }
    console.log(this.state.cols)
  }
  render() {
    return (
      <div>
        <GridList cellHeight={300} className="" cols={this.state.cols}>
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
