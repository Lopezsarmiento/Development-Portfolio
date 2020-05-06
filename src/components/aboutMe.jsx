import React, { Component } from 'react';
import Stack from './common/stack';

class AboutMe extends Component {
  state = {}
  render() {
    return (
      <div className="jumbotron p-3 p-md-5 rounded bg-about mt-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 shadow-lg bg-transparent rounded">
              <h3 className="mt-3 text-monospace font-italic text-right">
                Oh... hi! <i className="fa fa-hand-peace-o text-warning" aria-hidden="true"></i>
              </h3>
              <div className="blog-post text-justify mb-5 font-weight-light">
                <p className="bg-light rounded shadow p-2">
                  My name is <strong className="text-monospace font-italic font-weight-bold">Diego</strong> and I am a <span className="badge badge-warning text-monospace">full-stack web developer</span> from <span className="text-monospace font-italic">Colombia</span>. I moved to <span className="text-monospace font-italic">Buenos Aires</span> in 2010 and I have <span className="text-monospace font-italic">been living here</span> ever since. I am <span className="text-monospace font-italic text-danger">passionate</span> about <span className="badge badge-warning text-monospace">programming</span>, solving problems and <span className="text-monospace font-italic">making ideas</span> come <span className="text-monospace font-italic">to life.</span>
                </p>
                <p className="bg-light rounded shadow p-2">I have <strong className="text-monospace font-italic">over 3 years</strong> of experience writing <span className="text-monospace font-italic">web apps</span> that help users <span className="text-monospace font-italic">connect and communicate</span> with the rest of the world. I have acquired extensive <span className="text-monospace font-italic"> knowledge</span> of front-end <span className="badge badge-warning text-monospace">JavaScript and browser APIs</span> as well as experience using MEAN <span className="text-monospace font-italic">(mongoDB, Express, AngularJs, Node)</span> and <span className="text-monospace font-italic">MERN</span> (mongoDB, Express, <span className="text-monospace font-italic">React</span>, Node) technology stacks. My development <span className="text-monospace font-italic">experience also includes</span> more traditional technologies like <span className="text-monospace">ASP.NET, and MS SQL</span>.<br></br>
                  <span className="text-monospace font-italic">I am always seeking for new challenges and experiences.</span>
                </p>
              </div>
            </div>
            <div className="col-md-4">

            </div>
          </div>
          <div className="row mt-3 shadow-lg rounded">
            <div className="col-md-12">
              <Stack></Stack>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;