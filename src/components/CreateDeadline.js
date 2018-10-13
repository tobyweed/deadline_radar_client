import React, { Component } from 'react';
import axios from 'axios';

class CreateDeadline extends Component {
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
			<div className="create-deadline">
				<form onSubmit={this.handleFormSubmit}>
					<label htmlFor="event-name">Event name:</label>
					<input
						onChange={this.handleChange}
						className="formSubmit"
						type="text"
						placeholder="Name"
						name="name"
						required
					/>
					<div>
						<label htmlFor="select-type">Type:</label>
						<input
							onChange={this.handleChange}
							className="formSubmit"
							type="text"
							placeholder="Type of task"
							name="type"
						/>
					</div>
					<div>
						<label htmlFor="date">Date: </label>
						<input
							name="date"
							onChange={this.handleChange}
							className="form"
							placeholder="Date in ISO8 format"
							type="datetime-local"
							required
						/>
					</div>
					<div className="priority">
						<label htmlFor="priority">Priority: </label>
						<input
							name="priority"
							onChange={this.handleChange}
							className="form"
							placeholder="Integer from 1 to 10"
							type="number"
						/>
					</div>
					<div className="numOfHours">
						<label htmlFor="numOfHours">
							Expected Time to Complete:{' '}
						</label>
						<input
							name="numOfHours"
							onChange={this.handleChange}
							className="form"
							placeholder="Hrs rounded to the 10th"
							type="number"
						/>
					</div>
					<div className="submit">
						<input className="form" value="Submit" type="submit" />
					</div>
				</form>
				<p>{this.state.data}</p>
			</div>
		);
	}

	handleFormSubmit(e) {
		e.preventDefault();

		//create the deadline!
		return axios
			.post('/create-deadline', {
				name: this.state.name,
				type: this.state.type,
				date: this.state.date,
				priority: this.state.priority,
				num_of_hours: this.state.numOfHours
			})
			.then(res => {
				console.log('S');
				this.props.addDeadlineId(res.data.id);
				this.setState({ data: 'Success!' });
			})
			.catch(err => {
				return err;
			});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		//Check to make sure priority and numOfHours are integer values, to avoid
		//sending server a bad request
		if (
			e.target.name === 'priority' &&
			typeof this.state.priority !== 'number'
		) {
			this.setState({ priority: 1 });
		} else if (
			e.target.name === 'numOfHours' &&
			typeof this.state.numOfHours !== 'number'
		) {
			this.setState({ numOfHours: 0 });
		}
	}
}

export default CreateDeadline;
