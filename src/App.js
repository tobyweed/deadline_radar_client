import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Collapsible from './Collapsible.js';
import ShowDeadline from './components/ShowDeadline';

import * as d3 from "d3";
import * as d3scale from 'd3-scale';



class App extends Component {
	constructor() {
		super();
	}

	state = {
    deadlineIds: []
  };

	renderBar(obj) {
    return (
      <rect
        x={obj.date * 40}
        y={400 - obj.priority * 10}
        width={25}
        height={obj.priority * 10}
        fill={"green"}
      />
    );
  }

	componentDidMount() {
		axios.get('/deadlines').then(res => {
			this.setState({ deadlineIds: res.data });
		})

		this.drawChart(this.state.deadlineIds);
	}

	render() {
		const deadlineIds = this.state.deadlineIds;
		return (
			<div className="App">
				<Collapsible />
				{deadlineIds.map(function(deadlineId, i) {
					return (
						
						/*
						<li key={i}>
							<ShowDeadline id={deadlineId} />
						</li>
						*/
					);
				})}
			</div>
		);
	}

}


export default App;
