import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";

function PortInfo(props) {
  return (
    <Container>
      <Row>
        <div className="col-sm-6">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="col--sm-6">
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
