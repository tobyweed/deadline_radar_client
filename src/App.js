import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Collapsible from './Collapsible.js';
import ShowDeadline from './components/ShowDeadline';
import Registration from './components/Registration';
import AuthService from './AuthService';
import Logout from './components/Logout';
import { Jumbotron, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import Navigation from './components/Navigation.js';


class App extends Component {
	constructor() {
		super();
		this.Auth = new AuthService();
	}

	state = {
		deadlineIds: []
	};

	componentDidMount() {
		//Set headers, then get deadlineIds
		this.Auth.initialize().then(res => {
			axios.get('/deadlines').then(res => {
				this.setState({ deadlineIds: res.data });
			});
		});
	}

	render() {
		const deadlineIds = this.state.deadlineIds;
		return (
			<div className="App">
			<Navbar>
			  <Navbar.Header>
			    <Navbar.Brand>
					<div className="logo"></div>
					<h2>&nbsp; Deadline Radar</h2>
			    </Navbar.Brand>
			  </Navbar.Header>

			</Navbar>
				<Collapsible addDeadlineId={this.addDeadlineId.bind(this)} />
				{deadlineIds.map(function(deadlineId, i) {
					return (
						<li key={i}>
							<ShowDeadline id={deadlineId} />
						</li>
					);
				})}
				<Logout rerender={this.rerender.bind(this)} />
			</div>
		);
	}

	addDeadlineId(id) {
		let newDeadlineIds = this.state.deadlineIds.concat(id);
		this.setState({ deadlineIds: newDeadlineIds });
	}

	rerender() {
		this.props.rerender();
	}
}

export default App;
