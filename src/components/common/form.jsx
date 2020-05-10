import React, { Component } from 'react';

class Form extends Component {
  state = {}


  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-md-12">
            <form className="m-2">
              <h5 className="font-italic text-right text-monospace"> or send me an email</h5>
              <div className="form-group">
                <input type="text" className="form-control form-control-sm alert alert-secondary text-white border-0" id="exampleInputName" aria-describedby="emailHelp" placeholder="Tell me your name" required></input>
              </div>
              <div className="form-group">
                <input type="email" className="form-control form-control-sm alert alert-secondary text-white border-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What is your Email address?" required></input>
              </div>
              <div className="form-group">
                <textarea className="form-control form-control-sm alert alert-secondary text-white border-0" id="exampleFormControlTextarea1" rows="10" placeholder="Don't forget to write some lines.."></textarea>
              </div>
              <button type="button" className="btn btn-warning btn-lg btn-block ">Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;