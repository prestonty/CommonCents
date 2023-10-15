import React from "react";

// converts the svg in the assets/images folder into a react component called <Bar />
import { ReactComponent as Bar } from "../assets/images/barGraph.svg";

// this returns the image of the bar graph
export default function BarGraph(props) {
    // props contian category name
    return (
        <div class="barGraph">
            {/* displays the title of the graph */}
            <h2 class="sub-title">{props.title}</h2>
            <Bar />
        </div>
    );
}
