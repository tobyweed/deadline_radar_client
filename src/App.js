import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Collapsible from './Collapsible.js';
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
				<Collapsible />
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

}


export default App;
