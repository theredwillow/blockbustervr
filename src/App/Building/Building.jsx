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
        <Row leftPoint={[6.5,-12.5]} rightPoint={[10.05,-12.5]} name="backWall" test={true} />
        <Row leftPoint={[10.3,-12.4]} rightPoint={[12.4,-10.1]} name="backRightCorner" test={true} />
        <Row leftPoint={[12.5,-9.9]} rightPoint={[12.5,0]} name="rightWall" test={true} />

        {/* Why does adding this free-standing shelf cause the dizzing bouncing??? */}
        {/* <Row leftPoint={[9.25,0]} rightPoint={[9.25,-9.25]} name="backRightFree" test={true} /> */}

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
