import React, { Component } from 'react';
import AuthService from '../AuthService';

class Login extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.Auth = new AuthService();
	}

	state = {
		errorMessage: ''
	};

	render() {
		return (
			<div>
				<h1 className="login-form">Log In</h1>
				<form onSubmit={this.handleFormSubmit}>
					<input
						className="form-item"
						placeholder="Enter Username"
						name="username"
						type="text"
						onChange={this.handleChange}
						required
					/>
					<input
						className="form-item"
						placeholder="Enter Password"
						name="password"
						type="password"
						onChange={this.handleChange}
						required
					/>
					<br />
					<input
						className="form-submit"
						value="Submit"
						type="submit"
					/>
				</form>
				<p>{this.state.errorMessage}</p>
			</div>
		);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	async handleFormSubmit(e) {
		//Login on form submit
		e.preventDefault();
		const res = await this.Auth.login(this.state);
		if (this.Auth.loggedIn()) {
			//rerender if we're logged in successfully
			this.props.rerender();
		} else if (res && !!res.data.message) {
			this.setState({ errorMessage: res.data.message });
		}
	}
}

export default Login;
