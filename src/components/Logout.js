import React, { Component } from 'react';
import AuthService from '../AuthService';

class Logout extends Component {
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.Auth = new AuthService();
	}

	state = {
		errorMessage: ''
	};

	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Logout</button>
			</div>
		);
	}

	async logout() {
		await this.Auth.logout();
		return;
	}

	async handleClick(e) {
		await this.logout();
		this.props.rerender();
	}
}

export default Logout;
