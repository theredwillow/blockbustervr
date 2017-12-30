import React, { Component } from 'react';
import { connect } from 'react-redux';
import AssetManager from './assets/AssetManager.jsx';

export class App extends Component {

  render() {
    return (
      <a-scene width="90%" height="90%">

        <AssetManager />

        <a-camera position="0 0 0" look-controls>
          <a-cursor color="#4CC3D9" fuse="true" timeout="10"></a-cursor>
        </a-camera>

        <a-plane material="src:#carpet; repeat: 75 150" height="100" width="100" rotation="-90 0 0"></a-plane>

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
