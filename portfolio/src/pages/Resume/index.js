import React from "react";
import "./style.css";
import ResInfo from "../../components/Resume-Info";
import info from "../../portfolio.json";
import Links from "../../components/Links";
import Container from "../../components/Container";

function Resume() {
  return (
    <div className="background">
      <div className="jumbotron">
        <div className="portInfo">
          <p>My Resume</p>
        </div>
        <Links />
        <div className="clearfix"></div>
        <div className="linebreak">
          <hr size="1" color="black"></hr>
        </div>
        <Container>
          <div className="image">
            <img
              src="../../../images/image2.jpeg"
              className="img-fluid"
              height="auto"
              alt="Greg"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Resume;
