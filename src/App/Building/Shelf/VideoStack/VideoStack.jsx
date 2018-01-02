import React, { Component } from 'react';
import { connect } from 'react-redux';

export class VideoStack extends Component {

    constructor(props){
        super(props);
        this.videos = [];

        let missing = 7 - this.props.videoCovers;
        if ( missing < 0 ){
            missing = 0;
            this.props.videoCovers = 7;
        }
        let isTilted = (function() {
            let notRandomNumbers = [0,0,0,0,0,0,0,0,0,1];
            for (let i = 0; i < missing; i++) {
                notRandomNumbers.push(1);
            }
            let idx = Math.floor(Math.random() * notRandomNumbers.length);
            return notRandomNumbers[idx];
        })();

        // this.videoCovers will be an array later
        for (let v = 0; v < this.props.videoCovers; v++) {
            this.position = [0, 0.16, (v * 0.03) - 0.1];
            this.rotation = [0, 0, 0];
            if ( v === this.props.videoCovers - 1 && isTilted ) {
                // Make the last one lean over
                this.position[2] += (0.1 - this.position[2]) / 2;
                this.rotation[0] = Math.asin( ( 0.1 - this.position[2] ) / 0.16 ) * -57.2957795131;
            }
            this.videos.push( (
                <a-entity key={v} position={this.position.join(" ")} rotation={this.rotation.join(" ")}>
                    <a-plane class="video-front" material="src:#dvd_bigfish;repeat:-0.475 1;side:back;" height="0.32" width="0.2" position="0 0 0.015" rotation="0 180 0"></a-plane>
                    { /* Need to fix material placement on curve */ }
                    <a-plane class="video-curve" material="src:#dvd_bigfish;repeat:0.03 1;" height="0.32" width="0.03" position="-0.1 0 0" rotation="0 -90 0"></a-plane>
                    <a-plane class="video-back" material="src:#dvd_bigfish;repeat:0.475 1;" height="0.32" width="0.2" position="0 0 -0.015" rotation="0 180 0"></a-plane>
                    <a-plane class="video-crackside" color="black" height="0.32" width="0.03" position="0.1 0 0" rotation="0 90 0"></a-plane>
                    <a-plane class="video-cracktop" color="black" height="0.03" width="0.2" position="0 0.16 0" rotation="-90 0 0"></a-plane>
                    <a-plane class="video-crackbottom" color="black" height="0.03" width="0.2" position="0 -0.16 0" rotation="90 0 0"></a-plane>
                </a-entity>
            ) );
        }
    }

  render() {
    return (
      <a-entity class="videoStack" position={this.props.x + " 0.025 0"}>
        {this.videos}
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
