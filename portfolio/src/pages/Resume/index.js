import React from "react";
import "./style.css";
import Links from "../../components/Links";

function Resume() {
  return (
    <div className="background">
      <div className="jumbotron">
        <span className="resume">
          <p>My Resume</p>
        </span>
        <Links />
        <div className="clearfix"></div>
        <div className="linebreak">
          <hr size="1" color="grey"></hr>
        </div>
        <div className="Container"></div>
      </div>
    </div>
  );
}

export default Resume;
