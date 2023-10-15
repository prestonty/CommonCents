import React from "react";
import { ReactComponent as Bar } from "../assets/images/pieGraph.svg";

export default function PieGraph(props) {
    // props contian category name
    return (
        <div class="pieGraph">
            <h2 class="sub-title">{props.title}</h2>
            <Bar />
        </div>
    );
}
