import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Name from "../../components/Name";

function About() {
  return (
    <div id="entireArea">
      <div className="clearfix"></div>

      <div className="jumbotron jumbotron-fluid" id="jumboBack">
        <div className="jumbotron" id="jumboInfo">
          <span className="aboutMe">
            <p>About Me</p>
          </span>
          <div className="clearfix"></div>
          <div className="linebreak">
            <hr size="1" color="grey"></hr>
          </div>
          <Row>
            <Col size="sm-3">
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
            </Col>
            <Col size="sm-9">
              <Container>
                <p>
                  Hello, My name is Gregory Roberts. Born in Barstow, CA and
                  raised in Charlotte, NC since the age of 3. I am a graduate of
                  North Carolina Agricultural and Technical State University. I
                  majored in Business Finance while also using up my college
                  free time playing basketball on the Mens School Team. Some of
                  my best qualities include being able to work in a team
                  capacity, the ability to lead when necessary, and having a
                  strong work ethic. I have the ability to adapt and I'm very
                  flexible when it comes to doing what needs to be done to
                  complete tasks.
                </p>

                <p>
                  Just to tell you a little bit more about myself, I am a father
                  of 4. Two boys and two girls. I also have a fiance that has
                  been working my nerves about this wedding since the day I
                  proposed, making me rethink this whole marriage thing. Just
                  kidding. I am currently employed with Wells Fargo Bank as a
                  Financial Crimes Specialist. I have been with the bank for
                  more than 7 yrs and believe it is now time for a change to
                  something more interesting and self satisfying which led me to
                  Computer Coding. I really started to understand the passion I
                  have for computer coding when all I wanted to do, while at
                  work, was work on putting my own webpages together and work
                  with different API's. I hope to make the best of the
                  opportunity. Thanks for visiting my page. Feel free to take a
                  look around.
                </p>
              </Container>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default About;
