import React from "react";
import "./styles/barGraph.css";
import barGraphPic from "../components/barGraph.png";

console.log(barGraphPic);

export default function BarGraph(props) {
    // props contian category name
    return (
        <div class="barGraph">
            <h2 class="graph-title">Overall Spending</h2>
            <img src={barGraphPic} alt="Graph" />
        </div>
    );
}
