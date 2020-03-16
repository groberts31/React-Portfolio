import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import "./style.css";

function PortInfo(props) {
  return (
    <Container>
      <Row>
        <div className="col-sm-6 projImg">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="col-sm-6 projData">
          <div className="content">
            <h3>{props.projectName}</h3>
            <br />
            <h5>Webpage:</h5>
            <p>{props.webpage}</p>
            <h5>GitHub Repo:</h5>
            <p>{props.githubRepo}</p>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default PortInfo;
