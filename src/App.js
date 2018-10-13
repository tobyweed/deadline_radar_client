import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import CreateDeadline from './components/CreateDeadline';
import ShowDeadline from './components/ShowDeadline';

class App extends Component {
	constructor() {
		super();
	}

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
				<CreateDeadline addDeadline={this.addDeadline.bind(this)} />
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

	addDeadline(id) {
		let newDeadlineIds = this.state.deadlineIds.concat(id);
		this.setState({ deadlineIds: newDeadlineIds });
	}
}

export default App;
