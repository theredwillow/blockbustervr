import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shelf from './Shelf/Shelf.jsx';
// import FrontDesk from './FrontDesk/FrontDesk.jsx';

export class Building extends Component {

  // 3.25 shelf distance for hallways 

  makeRow(leftPoint, rightPoint) {
    let thisRow = [];

    let distX = leftPoint[0] - rightPoint[0];
    let distZ = leftPoint[1] - rightPoint[1];
    let thisWidth = Math.sqrt( Math.pow(distX, 2) + Math.pow(distZ, 2) );

    let midPoint = {
      x: ( (rightPoint[0] - leftPoint[0]) / 2 ) + leftPoint[0],
      z: ( (rightPoint[1] - leftPoint[1]) / 2 ) + leftPoint[1]
    };

    let rotation = 90;
    if (distX !== 0) {
      rotation += Math.atan(distZ/distX) * 57.2957795131;
    }
    else if (distZ < 0) {
      rotation = -90;
    }

    /*
    THIS WILL CREATE SEPARATE SHELVES FOR LONGER ROWS
    let testNum = 1;
    let dividerCount = thisWidth / testNum;
    while (dividerCount > 4) {
      testNum++;
      dividerCount = thisWidth / testNum;
    }
    */

    thisRow.push(
      <Shelf key={0} x={ midPoint.x } z={ midPoint.z } width={ thisWidth } rotate={ rotation } />
    );
    return thisRow;
  }

  render() {
    return (
      <a-entity id="store">

        {/* <FrontDesk position="0" /> */}

        { /* Back wall */ }
        <Shelf width="4" x="12.695" z="-14.9875" rotate="0" />

        { /* Right wall */ }
        { this.makeRow([14.9875, -14.695], [14.9875, 0]) }

        { /* First row from right wall */ }
        <Shelf width="4" x="11.7375" z="-10" rotate="90" />

        { this.makeRow([-1, -2], [-3, -4]) }
        <a-sphere radius="0.1" color="green" position="-1 1 -2"></a-sphere>
        <a-sphere radius="0.1" color="red" position="-3 1 -4"></a-sphere>

        { /* Left Wall */ }
        { this.makeRow([-14.9875, -8.695], [-14.9875, -14.695]) }

      </a-entity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

Building = connect( mapStateToProps, mapDispatchToProps )(Building);
export default Building;
