import React, { Component } from 'react';
import PhotoContainer from './Photo/Photo.jsx';
import { connect } from 'react-redux';
import { changeRoom } from './redux.js';

// Import photos
import hotelLounge from './assets/photos/hotel_lounge.JPG';
import hotelElevator from './assets/photos/hotel_elevator.JPG';
import hotelCurtains from './assets/photos/hotel_curtains.JPG';
import sixthstreetCarousel from './assets/photos/sixthstreet_carousel.JPG';
var photos = [hotelLounge, hotelElevator, hotelCurtains, sixthstreetCarousel];

export class App extends Component {

  constructor(props) {
    super(props);

    const radians = 6.28318530718 / photos.length;  // that's 2pi, 360deg
    let getPhotoLoc = (index, dist) => {
      let theseRadians = radians * (index + 1);
      let photoPosition = {
        x: ( dist * Math.cos(theseRadians) ), // right/left
        y: -0.5, // up/down
        z: ( dist * Math.sin(theseRadians) ) // forward/backward
      };
      return Object.values(photoPosition).join(" ");
    };
    for (let p = 0; p < photos.length; p++) {
      if ( p === 0 ){
        this.props.changeRoom(photos[p]);
      }
      photos[p] = (
        <PhotoContainer key={p} src={photos[p]} position={getPhotoLoc(p, 5)} />
      );
    }

  }

  render() {
    return (
      <a-scene width="90%" height="90%">

        <a-camera position="0 0 0" look-controls>
          <a-cursor color="#4CC3D9" fuse="true" timeout="10"></a-cursor>
        </a-camera>

        <a-sky src={this.props.room}></a-sky>

        {photos}

      </a-scene>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  room: state.room
});

const mapDispatchToProps = {  
  changeRoom
};

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App);
export default AppContainer;
