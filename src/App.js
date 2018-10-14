import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Collapsible from './Collapsible.js';
import ShowDeadline from './components/ShowDeadline';
import Registration from './components/Registration';
import AuthService from './AuthService';
import Logout from './components/Logout';
import {
	Jumbotron,
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem
} from 'react-bootstrap';
import Timeline from './components/Timeline';

class App extends Component {
	constructor() {
		super();
		this.Auth = new AuthService();
	}

	state = {
		deadlines: []
	};

	componentDidMount() {
		//Set headers, then get deadlines
		this.Auth.initialize().then(res => {
			axios.get('/deadlines').then(res => {
				this.setState({ deadlines: res.data });
			});
		});
	}

	render() {
		const deadlines = this.state.deadlines;
		console.log(deadlines);
		return (
			<div className="App">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<div className="logo" />
							<h2>&nbsp; Deadline Radar</h2>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem>
							<Logout rerender={this.rerender.bind(this)} />
						</NavItem>
					</Nav>
				</Navbar>
				<Collapsible addDeadline={this.addDeadline.bind(this)} />
				<Timeline numHours={100} deadlines={this.state.deadlines} />
			</div>
		);
	}

	addDeadline(deadline) {
		let newDeadlines = this.state.deadlines.concat(deadline);
		this.setState({ deadlines: newDeadlines });
	}

	rerender() {
		this.props.rerender();
	}
}

export default App;
