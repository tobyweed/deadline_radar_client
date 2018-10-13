import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Well, Collapse } from 'react-bootstrap';

// import the deadline form
import CreateDeadline from './components/CreateDeadline.js';

class Collapsible extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={() => this.setState({ open: !this.state.open })}>
          + Add a new deadline
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
            <CreateDeadline addDeadline ={this.addDeadline.bind(this)} />
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
  addDeadline(id) {
		let newDeadlineIds = this.state.deadlineIds.concat(id);
		this.setState({ deadlineIds: newDeadlineIds });

}
}

export default Collapsible;
