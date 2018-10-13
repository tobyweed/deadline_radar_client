import React from 'react';
import './index.css';
import { Button, Well, Collapse } from 'react-bootstrap';

// import the deadline form
import CreateDeadline from './components/CreateDeadline.js';

class Collapsible extends React.Component {
	state = {
		open: false
	};

	render() {
		return (
			<div>
				<Button
					bsStyle="primary"
					bsSize="large"
					onClick={() => this.setState({ open: !this.state.open })}
				>
					+ Add a new deadline
				</Button>
				<Collapse in={this.state.open}>
					<div>
						<Well>
							<CreateDeadline
								addDeadlineId={this.addDeadlineId.bind(this)}
							/>
						</Well>
					</div>
				</Collapse>
			</div>
		);
	}
	addDeadlineId(id) {
		console.log(id);
		this.props.addDeadlineId(id);
	}
}

export default Collapsible;
