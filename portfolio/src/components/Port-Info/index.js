import React from "react";
import Container from "../Container";
import Row from "../Row";
import "./style.css";

function PortInfo(props) {
  return (
    <Container>
      <div className="fullArea">
        <Row>
          <div className="picCol">
            <div className="container">
              <div className="img-container" size="50%">
                <img alt={props.name} src={props.image} />
              </div>
            </div>
          </div>
          <div className="projData">
            <div className="container">
              <h3>{props.projectName}</h3>
              <br />
              <h5>Webpage:</h5>
              <p>{props.webpage}</p>
              <h5>GitHub Repo:</h5>
              <p>{props.githubRepo}</p>
            </div>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default PortInfo;
