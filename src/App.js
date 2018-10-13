import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import CreateDeadline from './components/CreateDeadline';

class App extends Component {
	constructor() {
		super();
	}

	state = {
		deadlines: []
	};

	componentDidMount() {
		axios.get('/deadlines').then(res => {
			this.setState({ deadlines: res.data });
		});
	}

	render() {
		return (
			<div className="App">
				<CreateDeadline addDeadline={this.addDeadline.bind(this)} />
			</div>
		);
	}

	addDeadline(id) {
		let newDeadlines = this.state.deadlines.concat(id);
		this.setState({ deadlines: newDeadlines });
	}
}

export default App;
