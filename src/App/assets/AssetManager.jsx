import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import textures
import carpet from './textures/broadloom_carpet.jpg';

import dvdBigFish from './textures/dvd_bigfish.jpg';
import dvdBlockbuster from './textures/blockbuster-dvd-case.jpg';

import covers from './covers/ur28539995-your-watchlist/';

export class Assets extends Component {

  constructor(props){
    super(props);

    this.coverPics = [];
    for (let i = 0; i < covers.length; i++) {
      this.coverPics.push( (<img key={i} id={"dvd_cover" + i} src={covers[i]} alt="" />) );
    }

  }

  render() {
    return (
        <a-assets>
            <img id="carpet" src={carpet} alt="" />
            <img id="dvd_bigfish" src={dvdBigFish} alt="" />
            <img id="dvd_rental" src={dvdBlockbuster} alt="" />
            {this.coverPics}
        </a-assets>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

const AssetManager = connect( mapStateToProps, mapDispatchToProps )(Assets);
export default AssetManager;
