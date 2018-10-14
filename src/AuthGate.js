import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import App from './App';
import AuthService from './AuthService';
import Registration from './components/Registration';
import Login from './components/Login';

class AuthGate extends Component {
	constructor() {
		super();
		this.Auth = new AuthService();
	}

	state = {
		deadlineIds: []
	};

	render() {
		let loggedIn = this.Auth.loggedIn();
		if (loggedIn) {
			return <App rerender={this.rerender.bind(this)} />;
		} else {
			return (
				<div className="App">
					<Registration rerender={this.rerender.bind(this)} />
					<Login rerender={this.rerender.bind(this)} />
				</div>
			);
		}
	}

	rerender() {
		this.forceUpdate();
	}
}

export default AuthGate;
