import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
import Maps from './common/map';
import Form from './common/form';
import SocialMedia from './common/socialMedia';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {
        lng: -58.439147,
        lat: -34.609245,
        zoom: 10
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

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

    // disable map zoom when using scroll
    //map.scrollZoom.disable();
  }

  componentDidMount() {
    this.setmap();
  }

  render() {
    return (
      <div className="jumbotron p-3 p-md-5 rounded bg-contact mt-2">
        <div className="">
          <div className="row justify-content-between">
            <div className="col-md-5 shadow-lg rounded">
              <Maps></Maps>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 shadow-lg rounded mb-2">
                  <SocialMedia></SocialMedia>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 shadow-lg rounded">
                  <Form></Form>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;