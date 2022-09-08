/* App.js */
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs-3.6.7/canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class DoughnutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Activity"
			},
			subtitles: [{
				text: "71% Positive",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Education", y: 5 },
					{ name: "Freetime", y: 31 },
					{ name: "House", y: 40 },
					{ name: "Car", y: 17 },
					{ name: "Food", y: 7 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}
export default DoughnutChart;