import React, { Component } from 'react';
import DonutChart from './DonutChart';

export default class DonutChartWrapper extends Component {
  componentDidMount() {
    this.setState({
    chart: new DonutChart(this.refs.chart, this.props.status)
    })
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(nextProps) {
        this.state.chart.update(nextProps.status)
    }
  render() {
    return <div ref="chart"></div>
  }
}
