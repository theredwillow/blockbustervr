import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPhotos, addSound } from '../redux.js';

var photos = [
  '/photos/hotel_lounge.JPG',
  '/photos/hotel_elevator.JPG',
  '/photos/hotel_curtains.JPG',
  '/photos/sixthstreet_carousel.JPG'
];

var sounds = [
  '/audio/sixthstreet_carousel.m4a'
];

export class Assets extends Component {

  constructor(props) {
    super(props);

    let photoNames = [];
    for (let p = 0; p < photos.length; p++) {
      photoNames.push( photos[p].match(/photos\/(.*)?\..{3}$/i)[1] );
      photos[p] = (
        <img key={p} id={photoNames[p]} src={photos[p]} alt=""/>
      );
    }
    this.props.addPhotos(photoNames);

    for (let s = 0; s < sounds.length; s++) {
      let soundName = sounds[s].match(/audio\/(.*)?\..{3}$/i)[1];
      this.props.addSound(soundName);
    }

  }

  render() {
    return (
      <a-assets>
        {photos}
      </a-assets>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  room: state.room,
  photos: state.photos,
  sounds: state.sounds
});

const mapDispatchToProps = {  
  addPhotos,
  addSound
};

const AssetManager = connect( mapStateToProps, mapDispatchToProps )(Assets);
export default AssetManager;
