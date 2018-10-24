import React, { Component } from 'react';
import AuthService from '../AuthService';
import axios from 'axios';
import { Button, Well, Collapse } from 'react-bootstrap';

class Timeline extends Component {
	render() {
		const deadlines = this.props.deadlines;
		const deadlineNums = this.mapIds();
		const allHrs = this.createHourArray();
		return (
			<div className="timeline">
				{allHrs.map(function(hr, i) {
					if (deadlineNums[0].includes(hr)) {
						let index = deadlineNums[0].indexOf(hr);
						return (
							<span>
								<span
									className={
										'deadline _' + deadlineNums[1][index]
									}
									key={i}
								/>
							</span>
						);
					} else {
						return <span className="empty-hour" key={i} />;
					}
				})}
			</div>
		);
	}

	mapIds() {
		const hrsNow = Date.now() / 3600000;
		var hrsOfDeadlines = [];
		var prioritiesOfDeadlines = [];
		var idsOfDeadlines = [];
		this.props.deadlines.forEach((deadline, i) => {
			const current_date = new Date(deadline.date);
			const current_dateHrs = current_date.getTime() / 3600000;
			const hrsFromNow = Math.round(current_dateHrs - hrsNow);
			hrsOfDeadlines.push(hrsFromNow);
		});
		return [hrsOfDeadlines, prioritiesOfDeadlines, idsOfDeadlines];
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
