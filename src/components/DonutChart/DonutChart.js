import React from 'react'
import "./donut-chart.css"

export const DonutChart = ({size, rotateAngle, labelMarginTop, strokewidth, value, valuelabel, totalValue, nonCompleted, completed, txtColor}) => {
      size = size ? size : 250;
      size = (screen.width < 400  && size > 200) ? 150 : size;
      labelMarginTop = (screen.width < 400  && labelMarginTop > 200) ? 150 : labelMarginTop;
      console.log(labelMarginTop)
      rotateAngle = rotateAngle ? rotateAngle : 0;
      labelMarginTop = labelMarginTop ? labelMarginTop : 25
      strokewidth = strokewidth ? strokewidth : 25;
      const halfsize = (size * 0.5);
      const radius = halfsize - (strokewidth * 0.5);
      const circumference = 2 * Math.PI * radius;
      const strokeval = ((((value/totalValue)*100) * circumference) / 100);
      const dashval = (strokeval + ' ' + circumference);
  
      const trackstyle = {strokeWidth: strokewidth};
      const indicatorstyle = {strokeWidth: strokewidth, strokeDasharray: dashval}
      const rotateval = 'rotate(' + rotateAngle + " " + halfsize+','+halfsize+')';
  
      return (
        <svg width={size} height={size} className="donutchart">
          <circle r={radius} cx={halfsize} cy={halfsize} stroke={nonCompleted} transform={rotateval} style={trackstyle} className="donutchart-track"/>
          <circle r={radius} cx={halfsize} cy={halfsize} stroke={completed} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
          <text className="donutchart-text" fill={txtColor} x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
            <tspan className="donutchart-text-val">{value}/{totalValue}</tspan>
            <tspan className="donutchart-text-label" x={halfsize} y={halfsize+labelMarginTop}>{valuelabel}</tspan>
          </text>
        </svg>
      );
  }
