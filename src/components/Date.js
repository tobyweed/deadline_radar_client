//Not currently in use

import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Date extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: moment()
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(date) {
		this.props.setDate(date);
	}

	render() {
		return (
			<DatePicker
				selected={this.state.startDate}
				onChange={this.handleChange}
				showTimeSelected
			/>
		);
	}
}

export default Date;
