import React, { Component } from 'react';

class Maps extends Component {
  state = {}
  render() {
    return (
      <div className="">
        <div className="row">
          <div id="mapContainer" ref={el => this.mapContainer = el} className="mapContainer" />
        </div>
      </div>
    );
  }
}

export default Maps;