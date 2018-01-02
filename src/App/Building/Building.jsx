import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shelf from './Shelf/Shelf.jsx';

export class Building extends Component {

  render() {
    return (
      <a-entity>

        <Shelf width="4" />

      </a-entity>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({  
  
});

const mapDispatchToProps = {  
  
};

Building = connect( mapStateToProps, mapDispatchToProps )(Building);
export default Building;
