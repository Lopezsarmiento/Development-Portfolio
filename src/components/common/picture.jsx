import React, { Component } from 'react';
import me from '../../img/me.jpg';

class Picture extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={me} className="img-fluid rounded-circle w-65 h-65 border border-warning" alt=""></img>
        </div>
      </div>
    );
  }
}

export default Picture;