import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FrontDesk extends Component {

  constructor(props){
    super(props);
    this.dimensions = {
      primary: "#042599",
      secondary: "#fbfbfb",
      tertiary: "#f7ec22"
    };
  }

  render() {
    return (
      <a-entity class="frontDesk"
        position={ this.props.position + " 0 11" }
      >

        <a-sphere radius="0.1" position="0 0.05 0"></a-sphere>

        <a-box class="counter-wall" color={this.dimensions.secondary}
          depth="0.4" height="1" width="3"
          position="0 1 0"
          rotation="0 45 0"
        >
        </a-box>
        <a-box class="counter-top" color={this.dimensions.primary}
          depth="0.8" height="0.1" width="3"
          position="0.01 1.05 1.01"
          rotation="0 45 0"
        >
        </a-box>

      </a-entity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

FrontDesk = connect( mapStateToProps, mapDispatchToProps )(FrontDesk);
export default FrontDesk;
