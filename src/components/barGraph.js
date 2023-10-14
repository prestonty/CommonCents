import React from "react";
import "./styles/barGraph.css";
import { ReactComponent as Bar } from "../assets/images/Frame38.svg";

export default function BarGraph(props) {
    // props contian category name
    return (
        <div class="barGraph">
            <h2 class="graph-title">props.title</h2>
            <Bar />
        </div>
    );
}
