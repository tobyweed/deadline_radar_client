import React, { Component } from 'react';
import './App.css';

import CreateDeadline from './components/CreateDeadline';

class App extends Component {
	constructor() {
		super();
	}

	state = {
		deadlines: []
	};

	render() {
		return (
			<div className="App">
				<CreateDeadline addDeadline={this.addDeadline.bind(this)} />
			</div>
		);
	}

	addDeadline(id) {
		let newDeadlines = this.state.deadlines.concat('1');
		this.setState({ deadlines: newDeadlines });
	}
}

export default App;
