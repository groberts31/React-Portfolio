import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Form from "../../components/Form";

function Contact() {
  return (
    <div className="entireArea">
      <div className="jumbotron">
        <Container>
          <Row>
            <Form />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
