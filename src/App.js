import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Date from './components/Date';

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
					<label htmlFor="event-name">Event name:</label>
					<input
						onChange={this.handleChange}
						className="form-submit"
						value="Event name.."
						type="text"
						id="event-name"
					/>
					<div>
						<label htmlFor="select-type">Choose a type:</label>

						<select id="select-type">
							<option value="Job Application">
								Job Application
							</option>
							<option value="Homework">Homework</option>
							<option value="Project">Project</option>
							<option value="Other">Other</option>
						</select>
					</div>
					<div className="date-submit">
						<label>
							Date <Date />
						</label>
					</div>
					<div className="priority-submit">
						Priority:
						<input
							onChange={this.handleChange}
							className="form-submit"
							value="0"
							type="number"
						/>
					</div>
					<div className="submit">
						<input
							onChange={this.handleChange}
							className="form-submit"
							value="Submit"
							type="submit"
						/>
					</div>
				</form>
				<p>{this.state.data}</p>
			</div>
		);
	}

	handleFormSubmit(e) {
		e.preventDefault();

		// This is axios. It is how client communicates with server.
		//Login on form submit
		e.preventDefault();

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
