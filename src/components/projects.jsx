import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './common/footer';

class Projects extends Component {
	state = {
		title: 'Projects',
		projects: [
			{ id: 1, name: 'api', desc: 'calling rest-api', stack: '' },
			{ id: 2, name: 'server', desc: 'calling rest-api', stack: '' },
			{ id: 3, name: 'bot', desc: 'calling rest-api', stack: '' },
			{ id: 4, name: 'webscrapping', desc: 'calling rest-api', stack: '' },
			{ id: 5, name: 'basic Js Games', desc: 'calling rest-api', stack: '' },
			{ id: 6, name: 'etc', desc: 'calling rest-api', stack: '' }
		],
		photo: {
			name: 'Rick Mason',
			url: 'https://unsplash.com/@egnaro'
		}
	}
	render() {
		const { title, projects, photo } = this.state;
		return (
			<React.Fragment>
				<div className="jumbotron p-3 p-md-5 rounded bg-projects mt-2">
					<div className="container-fluid">
						<div className="row shadow-lg">
							{projects.map(item => (
								<div key={item.id} className="col-md-6">
									<div className="card flex-md-row mb-3 h-md-250 shadow-lg">
										<div className="card-body d-flex flex-column align-items-start">
											<strong className="d-inline-block mb-2 text-dark">#node #React #mongoDB #express</strong>
											<hr></hr>
											<h3 className="mb-0">{item.name}</h3>
											<p className="card-text mb-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti non quos hic! Placeat autem.</p>
											<Link to="/">Continue reading</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<Footer
					name={photo.name}
					url={photo.url}
				></Footer>
			</React.Fragment>
		);
	}
}

export default Projects;