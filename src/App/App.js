import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetManager from './assets/AssetManager.jsx';
import Building from './Building/Building.jsx';

export class App extends Component {

  render() {
    return (
      <a-scene width="90%" height="90%">

        <AssetManager />

          <a-camera position="0 0 0" look-controls>
            <a-cursor color="#4CC3D9" fuse="true" timeout="10"></a-cursor>
            <a-ring color="teal"
              radius-inner="2" radius-outer="1"
              height="2" width="3"
              rotation="90 0 0"
              position="0 -0.5 0">
            </a-ring>
          </a-camera>

        <a-plane material="src:#carpet; repeat: 75 150" height="30" width="30" rotation="-90 0 0"></a-plane>

        <Building />

        { /* <a-sky src={this.props.room}></a-sky> */ }

      </a-scene>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

const AppContainer = connect( mapStateToProps, mapDispatchToProps )(App);
export default AppContainer;
