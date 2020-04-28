//Created and maintained by andreology
import {scaleOrdinal, pie, arc, interpolate, select, nest, schemeCategory10 } from 'd3';
const MARGIN = { TOP: 10, BOTTOM: 10, LEFT: 10, RIGHT: 10}
const WIDTH = 300 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 400 - MARGIN.TOP - MARGIN.BOTTOM;

export default class DonutChart {

    constructor(element, status) {

        const vis = this
        const radius = Math.min(WIDTH, HEIGHT) /2;
        vis.svg = select(element)
           .append("svg")
               .attr("width", WIDTH)
           .attr("height", HEIGHT)
           .append("g").attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT /2 + ")");

        const color = scaleOrdinal(schemeCategory10);

        const pies = pie().sort(null).value(40);

        vis.arc = arc()
        .outerRadius(radius - 30)
        .innerRadius(radius- 70);

        const outerArc = arc()
        .outerRadius(radius - 23)
        .innerRadius(radius- 30);

        const innerArc = arc()
        .outerRadius(radius - 70)
        .innerRadius(radius- 78);

        vis.svg.append("path")
        .attr("fill", '#6c757d')
        .attr("d", outerArc({startAngle: 0, endAngle: 2*Math.PI}))
        .style("stroke-width", 5);

        vis.svg.append("path")
        .attr("fill", '#6c757d')
        .attr("d", innerArc({startAngle: 0, endAngle: 2*Math.PI}))
        .style("stroke-width", 5);


        const data0 = nest().entries(status);

        vis.update(status);

    }
     arcTween = a => {
         const vis = this
          var i = interpolate(this._current, a);
          this._current = i(0);
          return function(t) {
           return vis.arc(i(t));
          };
      }
    update(status) {
          const data = [status]

          const vis = this

          //join
          vis.path = vis.svg.selectAll(".main").data(data);
console.log("STATUS", data[0].endAngle)

          //exit
          vis.path.exit()
                .transition()
                .duration(750)
                .attrTween("d", vis.arcTween)
                .remove();

          //update
          vis.path
          .transition()
          .duration(800)
          .attrTween("d", vis.arcTween)

          //enter
          vis.path.enter().append("path")
              .attr("class", "main")
              .attr("fill", 'cyan')
              .transition()
              .duration(750)
              .attr("d", vis.arcTween);

    }


}
