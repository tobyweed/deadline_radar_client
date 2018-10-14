import React, {Component} from 'react';
import * as d3 from "d3";
import * as d3scale from 'd3-scale';

class BarChart2 extends Component {
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

	render() {
		return (
      <svg width="700px" height="300px">
        {this.renderBar({date: 2, priority: 30})}
        {this.renderBar({date: 3, priority: 25})}
      </svg>
    );
	}
}

export default BarChart2;
