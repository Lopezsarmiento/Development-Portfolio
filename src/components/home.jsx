import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config.json';
import Footer from './common/footer';

class Home extends Component {
  state = {}
  render() {
    const { name, url } = config.background.home;
    return (
      <React.Fragment>
        <div className="fullHeight jumbotron p-3 p-md-5 text-white rounded bg-home mt-2">
          <div className="container text-right">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <h1 className="display-3">Wello, Horld!</h1>
                <p className="font-weight-light text-monospace">I am Diego,<br /> a full-stack <span className="text-warning">Javascript</span> web developer<br />&& <br />this is my portfolio.</p>
                <p><Link className="btn btn-lg btn-warning" to="/about" role="button">Come inside »</Link></p>
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

export default Home;