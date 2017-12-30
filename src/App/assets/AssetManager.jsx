import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import textures
import carpet from './textures/broadloom_carpet.jpg';

export class Assets extends Component {

  render() {
    return (
        <a-assets>
            <img id="carpet" src={carpet} alt="" />
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
