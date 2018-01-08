import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoStack from './VideoStack/VideoStack.jsx';

export class Shelf extends Component {

  constructor(props){
    super(props);
    this.dimensions = {
      primary: "#042599",
      secondary: "#fbfbfb",
      tertiary: "#f7ec22"
    };

    let shelfLength = this.props.width - 0.1;
    let numOfStacks = Math.floor(shelfLength / 0.4); // 1.25x the video width
    let stackSpace = shelfLength / numOfStacks;

    var videoCovers = [];
    for (let z = 0; z < 112; z++) {
      videoCovers.push("#dvd_cover" + z);
    }

    this.currentDvd = 0;
    this.ledges = [];
    for (let l = -1.125; l <= 0.675; l = l + 0.45) {

      let videoStacks = [];
      let vsPosition = 0.05 - (shelfLength / 2) + (stackSpace / 2);
      for (let s = 0; s < numOfStacks; s++) {
        videoStacks.push( (
          <VideoStack key={l+s} dvdCover={videoCovers[this.currentDvd++]} dvdCount="2" x={vsPosition} />
        ) );
        vsPosition += stackSpace;
      }

      this.ledges.push( (
        <a-entity key={l} position={[0, l, 0.13].join(" ")}>
          <a-box class="shelf-ledge" color={this.dimensions.secondary}
            depth="0.23" height="0.025" width={this.props.width}
            position={ [0, 0.0125, 0].join(" ") }
          >
          {videoStacks}
          </a-box>
          <a-box class="shelf-edge" color={this.dimensions.primary}
          depth="0.01" height="0.08" width={this.props.width}
          position={ [0, 0.04, 0.12].join(" ") }
          >
          </a-box>
        </a-entity>
      ) );
    }

  }

  render() {
    return (
      <a-entity class="shelf"
        position={ [this.props.x, 1.125, this.props.z].join(" ") }
        rotation={"0 " + this.props.rotate + " 0"}
        width={this.props.width}
      >

        <a-box class="shelf-panel" color={this.dimensions.secondary}
          depth="0.025" height="2.25" width={this.props.width}
          position="0 0 0"
        >
        </a-box>

        <a-box class="shelf-wing" color={this.dimensions.primary}
          width="0.05" height="2.25" depth="0.26"
          position={ [(this.props.width/2 + 0.025), 0, 0.1175].join(" ") }
        >
        </a-box>

        <a-box class="shelf-wing" color={this.dimensions.primary}
          width="0.05" height="2.25" depth="0.26"
          position={ [-(this.props.width/2 + 0.025), 0, 0.1175].join(" ") }
        >
        </a-box>

        {this.ledges}

      </a-entity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

Shelf = connect( mapStateToProps, mapDispatchToProps )(Shelf);
export default Shelf;
