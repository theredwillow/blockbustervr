import React, { Component } from 'react';
import { connect } from 'react-redux';
// import FrontDesk from './FrontDesk/FrontDesk.jsx';
import Row from './Row/Row.jsx';

export class Building extends Component {

  // 3.25 shelf distance for hallways 

  render() {
    return (
      <a-entity id="store">

        {/* <FrontDesk position="0" /> */}

        { /* Back wall */ }
        <Row leftPoint={[4.05,-12.5]} rightPoint={[7.05,-12.5]} name="backWall1" />
        <Row leftPoint={[7.05,-12.5]} rightPoint={[10.05,-12.5]} name="backWall2" />

        <Row leftPoint={[10.3,-12.4]} rightPoint={[12.4,-10.1]} name="backRightCorner" />

        <Row leftPoint={[12.5,-9.9]} rightPoint={[12.5,-6.9]} name="rightWall1" />
        <Row leftPoint={[12.5,-6.9]} rightPoint={[12.5,-3.9]} name="rightWall2" />

        <Row leftPoint={[9.25,-6]} rightPoint={[9.25,-9]} name="backRightFree1" />
        <Row leftPoint={[9.25,-3]} rightPoint={[9.25,-6]} name="backRightFree2" />
        <Row leftPoint={[9.25,0]} rightPoint={[9.25,-3]} name="backRightFree3" />
        
        <Row leftPoint={[9.13,-9]} rightPoint={[9.13,-6]} name="backRightFree1back" />
        <Row leftPoint={[9.13,-6]} rightPoint={[9.13,-3]} name="backRightFree2back" />
        <Row leftPoint={[9.13,-3]} rightPoint={[9.13,0]} name="backRightFree3back" />

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
