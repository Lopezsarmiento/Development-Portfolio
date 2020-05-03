import React, { Component } from 'react';

class Sidebar extends Component {
	state = {}
	render() {
		return (
			<nav id="sidebar" className="active">
				<div className="sidebar-header">
					<h3>Sidebar title</h3>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Home</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Sidebar;