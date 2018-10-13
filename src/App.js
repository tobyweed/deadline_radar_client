import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Collapsible from './Collapsible.js';
import ShowDeadline from './components/ShowDeadline';

class App extends Component {
	state = {
		deadlineIds: []
	};

	componentDidMount() {
		axios.get('/deadlines').then(res => {
			this.setState({ deadlineIds: res.data });
		});
	}

	render() {
		const deadlineIds = this.state.deadlineIds;
		return (
			<div className="App">
				<Collapsible addDeadlineId={this.addDeadlineId.bind(this)} />
				{deadlineIds.map(function(deadlineId, i) {
					return (
						<li key={i}>
							<ShowDeadline id={deadlineId} />
						</li>
					);
				})}
			</div>
		);
	}

	addDeadlineId(id) {
		console.log(this.state.deadlineIds);
		console.log(id);
		let newDeadlineIds = this.state.deadlineIds.concat(id);
		console.log(this.state.deadlineIds);
		this.setState({ deadlineIds: newDeadlineIds });
		console.log(this.state.deadlineIds);
	}
}

export default App;
