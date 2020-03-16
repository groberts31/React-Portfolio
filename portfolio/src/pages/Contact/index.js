import React from "react";
import "./style.css";
import Form from "../../components/Form";
import Links from "../../components/Links";

function Contact() {
  return (
    <div className="jumbotron">
      <span className="contactMe">
        <p>Contact Me</p>
      </span>
      <Links />
      <div className="clearfix"></div>
      <div className="linebreak">
        <hr size="1" color="black"></hr>
      </div>
      <div className="clearfix"></div>
      <Form />
    </div>
  );
}

export default Contact;
