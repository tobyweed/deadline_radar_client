import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Collapsible from "./Collapsible.js";

import CreateDeadline from './components/CreateDeadline';

class App extends Component {
	constructor() {
		super();
	}

	state = {
		data: ''
	};

	render() {
		return (
			<div className="App">

				<CreateDeadline />
			</div>
		);
	}
}

export default App;
