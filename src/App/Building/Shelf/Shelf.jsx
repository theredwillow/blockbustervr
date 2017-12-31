import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoStack from './VideoStack/VideoStack.jsx';

export class Shelf extends Component {

  constructor(props){
    super(props);
    this.dimensions = {
      width: 4,
      x: 0,
      z: -3
    };

    this.ledges = [];
    for (let l = -1.125; l <= 0.675; l = l + 0.45) {
      this.ledges.push( (
        <a-entity key={l} position={[0, l, 0.13].join(" ")}>
          <a-box class="shelf-ledge" color="purple"
            depth="0.23" height="0.025" width={this.dimensions.width}
            position={ [this.dimensions.x, 0.0125, 0].join(" ") }
          >
            <VideoStack />
          </a-box>
          <a-box class="shelf-edge" color="green"
          depth="0.01" height="0.08" width={this.dimensions.width}
          position={ [0, 0.04, 0.13].join(" ") }
          >
          </a-box>
        </a-entity>
      ) );
    }

  }

  render() {
    return (
      <a-entity class="shelf" position={ [this.dimensions.x, 1.125, this.dimensions.z].join(" ") }>

        <a-box class="shelf-panel" color="red"
          depth="0.025" height="2.25" width={this.dimensions.width}
          position="0 0 0"
        >
        </a-box>

        <a-box class="shelf-wing" color="blue"
          width="0.05" height="2.25" depth="0.26"
          position={ [(this.dimensions.width/2 + 0.025), 0, 0.13].join(" ") }
        >
        </a-box>

        <a-box class="shelf-wing" color="yellow"
          width="0.05" height="2.25" depth="0.26"
          position={ [this.dimensions.x-(this.dimensions.width/2 + 0.025), 0, 0.13].join(" ") }
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