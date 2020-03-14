import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Links() {
    return (
        <div className="sourceLink">
            <ul className="sources">
            <li><Link to="">Resume</Link></li>
            {/* remember to change location of resume */}
            <li><Link to="">LinkedIn</Link></li>
            <li><Link to="">Github</Link></li>
            </ul>
        </div>
    )
}

export default Links;
