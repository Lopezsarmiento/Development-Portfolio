import React, { Component } from "react";
import config from "../config.json";
import Footer from "./common/footer";

class NotFound extends Component {
  state = {};
  render() {
    const { name, url } = config.background.home;
    return (
      <React.Fragment>
        <div className="midHeight bg-notFound jumbotron p-3 p-md-5 rounded mt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="container text-right notFound shadow-lg">
                <h1 className="largeFont">
                  <strong>404</strong>
                </h1>
                <h3>Page Not Found</h3>
                <p>
                  Sorry, the page you requested could NOT be found.
                  <br></br>Please go back to the Home page
                </p>
                <p>
                  <a className="btn btn-warning btn-lg" href="/" role="button">
                    Home
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="alert alert-light" role="alert">
          <small>
            Powered by
            <a href="https://giphy.com/" className="alert-link">
              {" "}
              Giphy
            </a>
          </small>
        </div>
      </React.Fragment>
    );
  }
}

export default NotFound;
