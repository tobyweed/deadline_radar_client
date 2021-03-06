import React, { Component } from 'react';
import AuthService from '../AuthService';
import {Navbar, Nav} from 'react-bootstrap';

class Registration extends Component {
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
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
					<div className="logo"></div>
					<h2>&nbsp; Deadline Radar</h2>
					</Navbar.Brand>
				</Navbar.Header>
			</Navbar>
				<h1 className="registration-form">Sign Up</h1>
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
					<input
						className="form-item"
						placeholder="Enter Email"
						name="email"
						type="email"
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
		const res = await this.Auth.register(this.state);
		if (this.Auth.loggedIn()) {
			//rerender if we're logged in successfully
			this.props.rerender();
		} else if (res && !!res.data.message) {
			this.setState({ errorMessage: res.data.message });
		}
	}
}

export default Registration;
