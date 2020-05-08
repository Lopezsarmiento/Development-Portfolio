import React, { Component } from 'react';
import Stack from './common/stack';
import Picture from './common/picture';

class AboutMe extends Component {
  state = {}

  render() {
    return (
      <div className="jumbotron p-3 p-md-5 rounded bg-about mt-2">
        <div className="">
          <div className="row">
            <div className="col-md-8 shadow-lg bg-transparent rounded mb-2">
              <h3 className="mt-3">
                Oh... Hello <i className="fa fa-hand-peace-o text-warning" aria-hidden="true"></i>
              </h3>
              <div className="blog-post text-justify mb-4 font-weight-light">
                <div className="bg-light rounded shadow p-2">
                  <p>
                    My name is <strong className="text-monospace font-italic font-weight-bold">Diego</strong> and I am a <span className="badge badge-warning text-monospace">full-stack web developer</span> from <span className="text-monospace font-italic">Colombia</span>. I moved to <span className="text-monospace font-italic">Buenos Aires</span> in 2010 and I have <span className="text-monospace font-italic">been living here</span> ever since. I am <span className="text-monospace font-italic text-danger">passionate</span> about <span className="badge badge-warning text-monospace">programming</span>, solving problems and <span className="text-monospace font-italic">making ideas</span> come <span className="text-monospace font-italic">to life.</span>
                    <br></br>
                    <br></br>
                    I have <strong className="text-monospace font-italic">over 3 years</strong> of experience writing <span className="text-monospace font-italic">web apps</span> that help users <span className="text-monospace font-italic">connect and communicate</span> with the rest of the world. I have acquired extensive <span className="text-monospace font-italic"> knowledge</span> of front-end <span className="badge badge-warning text-monospace">JavaScript and browser APIs</span> as well as experience using MEAN <span className="text-monospace font-italic">(mongoDB, Express, AngularJs, Node)</span> and <span className="text-monospace font-italic">MERN</span> (mongoDB, Express, <span className="text-monospace font-italic">React</span>, Node) technology stacks. My development <span className="text-monospace font-italic">experience also includes</span> more traditional technologies like <span className="text-monospace">ASP.NET, and MS SQL</span>.
                  </p>
                  <p>
                    <span className="">I am always seeking for new challenges and experiences.</span>
                  </p>
                  <Stack></Stack>
                </div>
              </div>
            </div>
            <aside className="col-md-4 blog-sidebar">
              <div className="p-4 mb-3 alert alert-warning rounded text-justify text-dark">
                <Picture></Picture>
                <h4 className="font-italic text-center">A bit more About me</h4>
                <hr></hr>
                <p className="mb-0 neucha">Whenever I'm not in front of the computer, I love making <strong>argentinian asados and colombian arepas</strong> for my family and friends. I also practice <strong>Aikido</strong> which is a Martial Art originated in Japan.
                At home I have a <strong>furry friend</strong> named Pepper, a big <strong>Golden retriever</strong> dog that <strong>goes crazy</strong> for tennis balls. <strong>Last but definitely not least</strong>: I have a <strong>gorgeous daughter</strong>. She was born in 2019, we named her <strong>Maite</strong> and she has become our <strong>day and night</strong>.</p>
                <hr></hr>
              </div>
            </aside>
          </div>
        </div>
      </div >
    );
  }
}

export default AboutMe;