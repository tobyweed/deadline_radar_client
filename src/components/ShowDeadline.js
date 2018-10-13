import React, { Component } from 'react';
import axios from 'axios';

class ShowDeadline extends Component {
	state = {
		data: ''
	};

	componentDidMount() {
		axios.get('/deadline/' + this.props.id).then(res => {
			this.setState({ data: res.data });
		});
	}

	render() {
		const data = this.state.data;
		return (
			<div className="show-deadline">
				Name: {data.name}
				<br />
				Type: {data.type}
				<br />
				Date: {data.date}
				<br />
				Priority: {data.priority}
				<br />
				Estimated Number of Hours to Complete: {data.num_of_hours}
				<br />
			</div>
		);
	}
}

export default ShowDeadline;
