import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
	state = {}
	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true,
			brand: 'LopezSarmiento'
		};
	}

	toggleNavbar() {
		this.setState({ collapsed: !this.state.collapsed });

	};

	render() {
		const { collapsed, brand } = this.state;
		const classOne = collapsed ? 'collapse navbar-collapse justify-content-end' : 'collapse navbar-collapse justify-content-end show';
		const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

		return (
			<nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light border-bottom border-warning">
				<Link className="navbar-brand text-muted text-monospace" to="/">{brand}</Link>
				<button onClick={this.toggleNavbar} className={classTwo} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={classOne} id="navbarNav">
					<div className="navbar-nav text-monospace">
						<Link onClick={this.toggleNavbar} className="nav-item nav-link active" to="/"><i className="fa fa-home" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></Link>
						<Link onClick={this.toggleNavbar} className="nav-item nav-link" to="/about"><i className="fa fa-address-card" aria-hidden="true"></i> About</Link>
						<Link onClick={this.toggleNavbar} className="nav-item nav-link" to="/projects"><i className="fa fa-rocket" aria-hidden="true"></i> Projects</Link>
						<Link onClick={this.toggleNavbar} className="nav-item nav-link" to="/contact"><i className="fa fa-commenting" aria-hidden="true"></i> Contact</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;