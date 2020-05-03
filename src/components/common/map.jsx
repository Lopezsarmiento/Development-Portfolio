import React, { Component } from 'react';

class Map extends Component {
  state = {}
  render() {
    return (
      <div className="container">
        <div className="row">
          <div id="mapContainer" ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
      </div>
    );
  }
}

export default Map;