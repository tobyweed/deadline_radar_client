import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	state = {
		data: ''
	};

	render() {
		return (
			<div className="App">
				<form onSubmit={this.handleFormSubmit}>
					<input
						className="form-submit"
						value="Submit"
						type="submit"
					/>
				</form>
				<p>{this.state.data}</p>
			</div>
		);
	}

	handleFormSubmit(e) {
		e.preventDefault();

		// This is axios. It is how client communicates with server.
		return axios
			.get('/trick')
			.then(res => {
				this.setState({ data: res.data });
			})
			.catch(err => {
				return err;
			});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
}

export default App;
