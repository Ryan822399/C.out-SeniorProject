import * as d3 from 'd3';
const MARGIN = { TOP: 50, BOTTOM: 50, LEFT: 80, RIGHT: 10}
const WIDTH = 500 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class DonutChart {

    constructor(element, status) {

        const vis = this
        const radius = Math.min(WIDTH, HEIGHT) /2;
        vis.svg = d3.select(element)
           .append("svg")
               .attr("width", WIDTH)
           .attr("height", HEIGHT)
           .append("g").attr("transform", "translate(" + WIDTH / 2 + "," + HEIGHT /2 + ")");

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie().sort(null).value(40);

        vis.arc = d3.arc()
        .outerRadius(radius - 30)
        .innerRadius(radius- 70);

        const outerArc = d3.arc()
        .outerRadius(radius - 23)
        .innerRadius(radius- 30);

        const innerArc = d3.arc()
        .outerRadius(radius - 70)
        .innerRadius(radius- 78);

        vis.svg.append("path")
        .attr("fill", 'black')
        .attr("d", outerArc({startAngle: 0, endAngle: 2*Math.PI}))
        .style("stroke-width", 5);

        vis.svg.append("path")
        .attr("fill", 'black')
        .attr("d", innerArc({startAngle: 0, endAngle: 2*Math.PI}))
        .style("stroke-width", 5);


        const data0 = d3.nest().entries(status);

        vis.update(status);

    }
     arcTween = a => {
         const vis = this
          var i = d3.interpolate(this._current, a);
          this._current = i(0);
          return function(t) {
           return vis.arc(i(t));
          };
      }
    update(status) {
          const data = [status ]

          const vis = this

          //join
          vis.path = vis.svg.selectAll(".main").data(data);

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
              .duration(7500)
              .attr("d", vis.arc(data));

    }


}
