import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import Map from './common/map';
import SocialMedia from './common/socialMedia';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {
        lng: -58.4972602,
        lat: -34.6406522,
        zoom: 10
      }
    };
  }

  setmap() {
    const { lat, lng, zoom } = this.state.map;
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3VtZXJjaXNjbyIsImEiOiJjazlweHgwNTgwZjdkM2ZvMzVxNjB4OGd5In0.SjymKPgGfwxFufghKST0gA';
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // disable map zoom when using scroll
    map.scrollZoom.disable();
  }

  componentDidMount() {
    this.setmap();
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="shadow col-md-6">
            <form className="mt-2">
              <h3>Email me</h3>
              <div className="form-group mt-3">
                <label htmlFor="nameInput">Name</label>
                <input type="text" className="form-control" id="nameInput" placeholder="" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required></input>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button className="btn btn-primary mb-5" type="submit">Send</button>
            </form>
          </div>
          <div className="col-md-6">
            <Map></Map>
          </div>
        </div>
        <div className="row mt-3">
          <div id="socialMedia" className="shadow col-md-12">
            <h4>Or Follow me on</h4>
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;