import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import config from '../config.json';
import Maps from './common/map';
import Form from './common/form';
import SocialMedia from './common/socialMedia';
import Footer from './common/footer';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setmap() {
    // move to config then to env var
    const { mapToken, settings } = config.mapConfig
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
      container: 'mapContainer',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [settings.lng, settings.lat],
      zoom: settings.zoom,
      interactive: settings.interactive
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([settings.lng, settings.lat])
      .addTo(map);

    // disable map zoom when using scroll
    //map.scrollZoom.disable();
  }

  componentDidMount() {
    this.setmap();
  }

  render() {
    const { name, url } = config.background.projects;
    return (
      <React.Fragment>
        <div className="jumbotron p-3 p-md-5 rounded bg-contact mt-2">
          <div className="">
            <div className="row justify-content-between">
              <div className="col-md-5 shadow-lg rounded">
                <Maps></Maps>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 shadow-lg rounded mb-2 bg-transparent">
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
        <Footer
          name={name}
          url={url}
        ></Footer>
      </React.Fragment>
    );
  }
}

export default Contact;