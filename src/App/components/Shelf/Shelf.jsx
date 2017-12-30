import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Shelf extends Component {

  constructor(props){
    super(props);
    this.dimensions = {
      width: 4,
      x: 0,
      z: -3
    };
  }

  render() {
    return (
      <a-entity class="shelf">

        <a-box class="shelf-panel" color="red"
          depth="0.05" height="2.25" width={this.dimensions.width}
          position={ [this.dimensions.x, 1.125, this.dimensions.z].join(" ") }
        >
        </a-box>

        <a-box class="shelf-wing" color="blue"
          width="0.05" height="2.25" depth="0.5"
          position={ [(this.dimensions.width/2 + 0.025), 1.125, -3].join(" ") }
        >
        </a-box>

        <a-box class="shelf-wing" color="yellow"
          width="0.05" depth="0.5" height="2.25"
          position={ [this.dimensions.x-(this.dimensions.width/2 + 0.025), 1.125, -3].join(" ") }
        >
        </a-box>

        <a-box class="shelf-ledge" color="purple"
          depth="0.5" height="0.05" width={this.dimensions.width}
          position={ [this.dimensions.x, 0.025, -3].join(" ") }
        >
        </a-box>

        <a-box class="shelf-ledge" color="purple"
          depth="0.5" height="0.05" width={this.dimensions.width}
          position={ [this.dimensions.x, 0.475, -3].join(" ") }
        >
        </a-box>

        <a-box class="shelf-ledge" color="purple"
          depth="0.5" height="0.05" width={this.dimensions.width}
          position={ [this.dimensions.x, 0.95, -3].join(" ") }
        >
        </a-box>

        <a-box class="shelf-ledge" color="purple"
          depth="0.5" height="0.05" width={this.dimensions.width}
          position={ [this.dimensions.x, 1.425, -3].join(" ") }
        >
        </a-box>

        <a-box class="shelf-ledge" color="purple"
          depth="0.5" height="0.05" width={this.dimensions.width}
          position={ [this.dimensions.x, 1.9, -3].join(" ") }
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

Shelf = connect( mapStateToProps, mapDispatchToProps )(Shelf);
export default Shelf;
