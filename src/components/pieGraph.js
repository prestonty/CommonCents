import React from "react";
import { ReactComponent as Bar } from "../assets/images/pieGraph.svg";

// this displays the pie chart. just displays the svg image and is within a div with the class pieGraph to give it shadowing
export default function PieGraph(props) {
    return (
        <div class="pieGraph">
            <h2 class="sub-title">{props.title}</h2>
            <Bar />
        </div>
    );
}
