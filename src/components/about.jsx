import React, { Component } from 'react';
import Stack from './common/stack';

class About extends Component {
	state = {
		title: 'About'
	}
	render() {
		return (
			<main role="main" className="container mt-5">
				<div className="row">
					<div className="col-md-8 shadow bg-light rounded border border-warning">
						<h3 className="pb-4 mb-4 mt-3 font-italic border-bottom">
							Hello there <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
						</h3>
						<div className="blog-post text-justify mb-5 font-weight-light">
							<p>
								<span className="font-weight-bold text-dark">Hi!</span>, my name is <strong className="text-monospace font-italic font-weight-bold">Diego</strong> and I am a <span className="badge badge-warning text-monospace">full-stack web developer</span> from <span className="text-monospace font-italic">Colombia</span>. I moved to <span className="text-monospace font-italic">Buenos Aires</span> in 2010 and I have <span className="text-monospace font-italic">been living here</span> ever since. I am <span className="text-monospace font-italic text-danger">passionate</span> about <span className="badge badge-warning text-monospace">programming</span>, solving problems and <span className="text-monospace font-italic">making ideas</span> come <span className="text-monospace font-italic">to life.</span>
							</p>
							<p>I have <strong className="text-monospace font-italic">over 3 years</strong> of experience writing <span className="text-monospace font-italic">web apps</span> that help users <span className="text-monospace font-italic">connect and communicate</span> with the rest of the world. I have acquired extensive <span className="text-monospace font-italic"> knowledge</span> of front-end <span className="badge badge-warning text-monospace">JavaScript and browser APIs</span> as well as experience using MEAN <span className="text-monospace font-italic">(mongoDB, Express, AngularJs, Node)</span> and <span className="text-monospace font-italic">MERN</span> (mongoDB, Express, <span className="text-monospace font-italic">React</span>, Node) technology stacks. My development <span className="text-monospace font-italic">experience also includes</span> more traditional technologies like <span className="text-monospace">ASP.NET, and MS SQL</span>.</p>
							<p className="text-monospace font-italic">I am always seeking for new challenges and experiences.</p>
						</div>
					</div>
					<aside className="col-md-4 blog-sidebar">
						<div className="p-4 mb-3 rounded border border-dark">
							<h4 className="font-italic">About</h4>
							<p className="mb-0 text-secondary">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
						</div>
						<div className="p-4 shadow bg-light rounded border border-warning">
							<h4 className="font-italic">Elsewhere</h4>
							<ol className="list-unstyled">
								<li><a to="#">GitHub</a></li>
								<li><a to="#">Linkedin</a></li>
								<li><a to="#">Instagram</a></li>
								<li><a to="#">Twitter</a></li>
							</ol>
						</div>
					</aside>
				</div>
				<div className="row mt-3">
					<div className="col-md-12 mb-5">
						<Stack></Stack>
					</div>
				</div>
			</main >
		);
	}
}

export default About;