import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shelf from './Shelf/Shelf.jsx';

window.move = function(dir, amount) {
  let selectedBall = window.selectedBall;
  if (!selectedBall) {
    console.log("No ball has been selected yet.");
    return;
  }
  let position = selectedBall.getAttribute("position");
  switch (dir) {
    case "left":
      position.x -= amount;
      break;
    case "right":
      position.x += amount;
      break;
    case "forward":
      position.z -= amount;
      break;
    case "back":
    case "backward":
      position.z += amount;
      break;
    default:
      console.log("what direction???");
      break;
  }

  selectedBall.setAttribute("position", position);
  console.log("New direction:", position);

};

export class Row extends Component {

  // 3.25 shelf distance for hallways 

  constructor(props) {
    super(props);

    this.leftPoint = this.props.leftPoint;
    this.rightPoint = this.props.rightPoint;
    this.id = this.props.name || "";
    this.items = [];

    let distX = this.leftPoint[0] - this.rightPoint[0];
    let distZ = this.leftPoint[1] - this.rightPoint[1];
    this.width = Math.sqrt( Math.pow(distX, 2) + Math.pow(distZ, 2) );

    this.midPoint = {
      x: ( (this.rightPoint[0] - this.leftPoint[0]) / 2 ) + this.leftPoint[0],
      z: ( (this.rightPoint[1] - this.leftPoint[1]) / 2 ) + this.leftPoint[1]
    };

    this.rotation = Math.atan(distZ / distX) * -57.2957795131;
    if (this.props.test) {
      console.log( "---", this.id, "---" );
      console.log("this.rotation =", this.rotation);
    }
    if ( this.rotation === 0 && (1 / this.rotation > 0) ) { this.rotation = 180; }
    if (this.props.test) { console.log("fixed negative zeros:", this.rotation); }
    if ( this.rotation > 0 || this.rotation.toFixed(2) <= -90 ) { this.rotation += 180; }
    if (this.props.test) { console.log("added a spin", this.rotation); }

    this.items.push(
      <Shelf id={this.id + "-shelf"} key={0}
        x={ this.midPoint.x } z={ this.midPoint.z } width={ this.width } rotate={ this.rotation } />
    );

    if ( this.props.test ) {
      this.items.push(
        <a-sphere color="red" radius="0.1" key="left" id={this.id + "-redBall"}
          onClick={this.selectBall}
          position={ this.leftPoint[0] + " 1 " + this.leftPoint[1] }></a-sphere>
      );
      this.items.push(
        <a-sphere color="green" radius="0.1" key="right" id={this.id + "-greenBall"}
          onClick={this.selectBall}
          position={ this.rightPoint[0] + " 1 " + this.rightPoint[1] }></a-sphere>
      );
    }

  }

  selectBall(e) {
    window.selectedBall = e.target;
    console.log(e.target.id, "selected");
  }

  render() {
    return (
      <a-entity class="row" id={this.id}>

        { this.items }

      </a-entity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

Row = connect( mapStateToProps, mapDispatchToProps )(Row);
export default Row;
