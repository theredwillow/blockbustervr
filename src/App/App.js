import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetManager from './assets/AssetManager.jsx';
import Building from './Building/Building.jsx';

export class App extends Component {

  render() {
    return (
      <a-scene width="15" height="15">

        <AssetManager />

        <a-camera position="0 0 0" look-controls>
          <a-cursor color="#4CC3D9" fuse="true" timeout="10"></a-cursor>
        </a-camera>

        <a-plane material="src:#carpet; repeat: 75 150" height="25" width="25" rotation="-90 0 0"></a-plane>

        <Building />

        <a-sky color="red"></a-sky>

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
