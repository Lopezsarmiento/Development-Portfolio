import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
import Map from './common/map';
import SocialMedia from './common/socialMedia';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {
        lng: -58.439147,
        lat: -34.609245,
        zoom: 9
      }
    };
  }

  setmap() {
    const { lat, lng, zoom } = this.state.map;

    // move to config then to env var
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtZXJjaXNjbyIsImEiOiJjazlweHgwNTgwZjdkM2ZvMzVxNjB4OGd5In0.SjymKPgGfwxFufghKST0gA';
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      interactive: false
    });

    // disable map zoom when using scroll
    map.scrollZoom.disable();
  }

  componentDidMount() {
    this.setmap();
  }

  render() {
    return (
      <div className="jumbotron full-height p-3 p-md-5 rounded bg-contact mt-2">
        <div className="container-fluid text-right">
          <div className="row">
            <div className="col-md-12">
              <Map></Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;