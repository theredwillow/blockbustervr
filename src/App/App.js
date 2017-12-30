import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {

  render() {
    return (
      <a-scene width="90%" height="90%">

        <a-camera position="0 0 0" look-controls>
          <a-cursor color="#4CC3D9" fuse="true" timeout="10"></a-cursor>
        </a-camera>

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
