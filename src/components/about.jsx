import React, { Component } from 'react';

class About extends Component {
	state = {
		title: 'About'
	}
	render() {
		return (
			<main role="main" className="container mt-5">
				<div className="row">
					<div className="col-md-8 shadow">
						<h3 className="pb-4 mb-4 mt-3 font-italic border-bottom">
							Hello there <i className="fa fa-hand-peace-o" aria-hidden="true"></i>
						</h3>
						<div className="blog-post text-justify">
							<p>
								My name is Diego and I am a full-stack web developer from Colombia. I moved to Buenos Aires in 2010 and I have been living here ever since. I am passionate about coding, solving problems and making ideas come to life.
							</p>
							<p>I have over 3 years of experience writing web apps that help users to connect and communicate with the rest of the world. I have adquired extensive knowledge of front-end JavaScript and browser APIs as well as experience using MEAN (mongoDB, Express, AngularJs, Node) and MERN (mongoDB, Express, React, Node) technology stacks. My development experience also includes more traditional technologies like ASP.NET, and MS SQL</p>
							<p>I am always seeking for challenges and new experiences.</p>

						</div>
					</div>
					<aside className="col-md-4 blog-sidebar">
						<div className="p-4 mb-3 bg-light rounded">
							<h4 className="font-italic">About</h4>
							<p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
						</div>
						<div className="p-4">
							<h4 className="font-italic">Elsewhere</h4>
							<ol className="list-unstyled">
								<li><a to="#">GitHub</a></li>
								<li><a to="#">Twitter</a></li>
								<li><a to="#">Facebook</a></li>
							</ol>
						</div>
					</aside>
				</div>
			</main>
		);
	}
}

export default About;