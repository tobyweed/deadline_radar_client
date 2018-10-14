import React, { Component } from 'react';
import AuthService from '../AuthService';
import ShowDeadline from './ShowDeadline';
import axios from 'axios';

class Timeline extends Component {
	render() {
		const deadlineIds = this.props.deadlineIds;
		const hrsOfDeadlines = this.mapIds();
		const allHrs = this.createHourArray();
		console.log(hrsOfDeadlines);
		return (
			<div>
				{allHrs.map(function(hr, i) {
					if (hrsOfDeadlines.includes(hr)) {
						return <span className="deadline" key={i} />;
					} else {
						console.log(hrsOfDeadlines.includes(0));
						return <span className="empty-hour" key={i} />;
					}
				})}
			</div>
		);
	}

	mapIds() {
		const hrsNow = Date.now() / 3600000;
		var hrsOfDeadlines = [];
		this.props.deadlines.forEach((deadline, i) => {
			const current_date = new Date(deadline.date);
			const current_dateHrs = current_date.getTime() / 3600000;
			const hrsFromNow = Math.round(current_dateHrs - hrsNow);
			hrsOfDeadlines.push(hrsFromNow);
			console.log(hrsOfDeadlines);
		});
		return hrsOfDeadlines;
	}

	createHourArray() {
		let allHrs = [];
		for (let i = 1; i <= this.props.numHours; i++) {
			allHrs.push(i);
		}
		return allHrs;
	}
}

export default Timeline;
