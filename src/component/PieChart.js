import React from "react";
import "../App.css";
import { expenseData } from "./data";

import CanvasJSReact from '../canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


//function to clone arrays
const clone = (items) => 
  items.map(item => 
    Array.isArray(item) ? clone(item) : { ...item }
);
var cloned = clone(expenseData)

//console.log("recursion clone",cloned);

cloned.forEach(c => {
  delete c.name;
  delete c.description;
});

var arr = clone(cloned)

let categoryTotals = []
let total = 0;

arr.forEach(e => {
  
  if (categoryTotals.some( code => code.label === e.category) ){
    var index = -1;
    categoryTotals.find(function (item, i) {
      if (item.label === e.category) {
        index = i;
      }
      return i;
    });
    categoryTotals[index].y += e.amount;

  }
  else{
    var newLabel = {}
    newLabel.y = e.amount;
    newLabel.label = e.category;
    categoryTotals.push(newLabel);
  }
  total += e.amount;
});

var percentageObj = clone(categoryTotals);

percentageObj.forEach(p => {
  p.y = ((p.y)/total)*100;
});

console.log(percentageObj);



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
      dataPoints: percentageObj
    }]
  }
  return(
    <div className="budget-graph">
      <CanvasJSChart options = {options} /> 
    </div>
  );
};
