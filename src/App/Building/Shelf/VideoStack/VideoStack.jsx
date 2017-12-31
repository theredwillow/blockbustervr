import React, { Component } from 'react';
import { connect } from 'react-redux';

export class VideoStack extends Component {

  render() {
    return (
      <a-entity class="videoStack" position="0 0.025 0">

        <a-box class="video" color="blue"
          depth="0.03" height="0.32" width="0.2"
          position={ [0, 0.16, 0].join(" ") }
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

VideoStack = connect( mapStateToProps, mapDispatchToProps )(VideoStack);
export default VideoStack;
