// Successfully compiled!

import React, {Component} from 'react';
import * as d3 from "d3";
import * as d3Color from 'd3-color';
import * as d3Interpolate from 'd3-interpolate';
import * as d3ScaleChromatic from 'd3-scale-chromatic';
import * as d3Scale from 'd3-scale';

class BarChart extends Component {


	drawChart() {
		var w = 700;
		var h = 300;
		var scale = d3.scaleLinear().domain([100, 500]);

		const svg = d3.select("body")
								.append("svg")
								.attr("width", w)
								.attr("height", h)
								.style("margin-left", "100px");

	  const data = [12, 5, 6, 6, 9, 10];

		svg.selectAll("rect")
			.data(data)
			.enter()
			.append("rect")
			.attr("x", (d, i) => i * 70)
			.attr("y", (d, i) => h - 10 * d)
			.attr("width", 25)
			.attr("height", (d, i) => d * 10)
			.attr("fill", "teal");

			svg.selectAll("text")
				.data(data)
				.enter()
				.append("text")
				.attr("x", (d, i) => i * 70 + 5)
				.attr("y", (d, i) => h - 10 * d - 3)
				.text((d, i) => d);

	}

	componentDidMount() {
    this.drawChart();
  }

	render() {
		return <div id={"#" + this.props.id}></div>;
	}
}

export default BarChart;
