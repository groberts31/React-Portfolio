import React from "react";
import "./style.css";
import PortInfo from "../../components/Port-Info";
import info from "../../portfolio.json";
import Links from "../../components/Links";

function Portfolio() {
  return (
      <div className="background">
    <div className="jumbotron">
      <div className="portInfo">
        <p>Portfolio</p>
      </div>
      <Links />
      <div className="clearfix"></div>
      <div className="linebreak">
        <hr size="1" color="black"></hr>
      </div>
        <PortInfo
          image={info[0].image}
          name={info[0].name}
          projectName={info[0].projectName}
          webpage={info[0].webpage}
          githubRepo={info[0].githubRepo}
        />
        <PortInfo
          image={info[1].image}
          name={info[1].name}
          projectName={info[1].projectName}
          webpage={info[1].webpage}
          githubRepo={info[1].githubRepo}
        />
        <PortInfo
          image={info[2].image}
          name={info[2].name}
          projectName={info[2].projectName}
          webpage={info[2].webpage}
          githubRepo={info[2].githubRepo}
        />
        <PortInfo
          image={info[3].image}
          name={info[3].name}
          projectName={info[3].projectName}
          webpage={info[3].webpage}
          githubRepo={info[3].githubRepo}
        />
      </div>
    </div>
  );
}

export default Portfolio;
