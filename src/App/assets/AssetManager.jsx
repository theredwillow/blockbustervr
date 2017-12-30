import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Assets extends Component {

    constructor(props){
        super(props);
        var textures = [];
        // <img id="advertisement" src="ad.png">
    }

  render() {
    return (
        <a-assets>
            {textures}
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
