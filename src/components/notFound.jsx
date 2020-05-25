import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="midHeight bg-notFound jumbotron p-3 p-md-5 rounded mt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="container text-right floralWhite shadow-lg">
                <h1 className="largeFont">
                  <strong>404</strong>
                </h1>
                <h3>Page Not Found</h3>
                <p>
                  Sorry, the page you requested could not be found.
                  <br></br>you can go back to the Home page
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
