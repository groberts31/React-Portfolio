import React from "react";
import "./style.css";

function Links() {
  return (
    <span className="sourceLink">
      <a href="https://www.linkedin.com/in/greg-roberts-b54906193/">
        <img
          src="./images/icons8-linkedin-32.png"
          className="img-fluid"
          alt="LinkedIn"
        />
      </a>
      <br />
      <a href="https://github.com/groberts31">
        <img
          src="./images/GitHub-Mark-32px.png"
          className="img-fluid"
          alt="GitHub"
        />
      </a>
    </span>
  );
}

export default Links;
