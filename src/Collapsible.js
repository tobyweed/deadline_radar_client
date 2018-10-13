import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Button, Well, Collapse } from 'react-bootstrap';

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
        <Button onClick={() => this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              WELL THIS IS A Collapsible
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Collapsible;
