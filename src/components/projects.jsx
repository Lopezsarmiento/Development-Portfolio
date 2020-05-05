import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import image from '../img/gumball.png';

class Projects extends Component {
	state = {
		title: 'Projects',
		projects: [
			{ id: 1, name: 'api', img: '../../public/' },
			{ id: 2, name: 'server' },
			{ id: 3, name: 'bot' },
			{ id: 4, name: 'webscrapping' },
			{ id: 5, name: 'basic Js Games' },
			{ id: 6, name: 'etc' }
		]
	}
	render() {
		const { title, projects } = this.state;
		return (
			<BrowserRouter>
				<div className="container mt-5 bg-transparent">
					<div className="row">
						{projects.map(project => (
							<div key={project.id} className="col-md-6">
								<div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-light">
									<div className="col-md-8 p-4 d-flex flex-column position-static">
										<strong className="d-inline-block mb-2 text-primary">{project.name}</strong>
										<h3 className="mb-0">Featured Post</h3>
										<div className="mb-1 text-muted">Nov 12</div>
										<p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.
									</p>
										<Link to="#" className="stretched-link">Continue reading</Link>
									</div>
									<div className="col-md-4">
										<img src={image} className="img-fluid" alt="Responsive image"></img>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default Projects;