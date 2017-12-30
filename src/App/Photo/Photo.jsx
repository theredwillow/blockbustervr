import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoom } from '../redux.js';

export class Photo extends Component {
  render() {
    return (
      <a-sphere
       position={this.props.position} radius="1"
       src={this.props.src} onClick={() => this.props.changeRoom(this.props.src)}>
        <a-animation attribute="rotation"
          dur="25000"
          easing="linear"
          fill="forwards"
          to="0 360 0"
          repeat="indefinite">
        </a-animation>
      </a-sphere>
    );
  }
}

// PhotoContainer.js
const mapStateToProps = (state, ownProps) => ({  
  room: state.room
});

const mapDispatchToProps = {  
  changeRoom
};

const PhotoContainer = connect( mapStateToProps, mapDispatchToProps )(Photo);
export default PhotoContainer;
