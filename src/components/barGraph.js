import React from "react";
import { ReactComponent as Bar } from "../assets/images/barGraph.svg";

export default function BarGraph(props) {
    // props contian category name
    return (
        <div class="barGraph">
            <h2 class="sub-title">{props.title}</h2>
            <Bar />
        </div>
    );
}
