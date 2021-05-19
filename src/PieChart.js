import React from "react";
import "./App.css";
import { expenseData } from "./data";

import CanvasJSReact from './canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var myJSON = JSON.stringify(expenseData);
var newString = myJSON.slice();
var cloneJsonData = JSON.parse(newString);


cloneJsonData.forEach(element => {
  delete element.name;
  delete element.description;
});
console.log(cloneJsonData);

//new JSON object to index percentages
cloneJsonData.forEach(element => {
  
});



export const PieChart = () => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b> {label} </b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 18, label: "somethnig" },
        { y: 49, label: "satoehu" },
        { y: 9, label: "satoeuh" },
        { y: 5, label: "aoeu" },
        { y: 19, label: "aoeu" }
      ]
    }]
  }
  return(
    <div className="budget-graph">
      <CanvasJSChart options = {options} /> 
    </div>
  );
};
