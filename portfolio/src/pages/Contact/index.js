import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Name from "../../components/Name";
import Form from "../../components/Form";


function Contact() {
  return (
    <div className="entireArea">
    <Name />
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
