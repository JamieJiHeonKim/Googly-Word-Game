import React from "react";
import { GooglyFont, ScoreFont } from "./Style";
import { Jumbotron, Button, Image, Container, Row, Col } from "react-bootstrap";
import education from "./education.jpg";

export const HomePage = () => (
  <div>
    <Jumbotron>
      <GooglyFont>Googly</GooglyFont>
      <p>
        Googly is an online learning platform that serves to teach the English
        terminology and basic mathematics through an immersive game.
        <br></br>
        Recent studies from the United Nations concluded that 617 million youth
        worldwide lack literacy skills including 750 million adults remaining
        illiterate in 2016.
        <br></br>
        “Anyone who has never made a mistake has never tried anything new.”
        -Albert Einstein
      </p>
      <img src={education} />
      <br></br>
      <br></br>
      <Button
        variant="outline-info"
        href="https://github.com/JamieJiHeonKim/Googly-Word-Game"
      >
        github.com/JamieJiHeonKim/Googly-Word-Game/
      </Button>
    </Jumbotron>

    <div>
      <ScoreFont>Contact</ScoreFont>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image
              className="photo"
              src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58484.jpg"
              roundedCircle
            />
            <Image
              className="photo"
              src="https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg"
              roundedCircle
            />
            <Image
              className="photo"
              src="https://image.freepik.com/free-vector/woman-profile-cartoon_18591-58480.jpg"
              roundedCircle
            />
            <Image
              className="photo"
              src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
      <h6 className="right1">
        Harshal Chhaniyara
        <br></br>
        <br></br>
        <Button variant="outline-info" href="https://github.com/Hschhaniyara">
          GitHub
        </Button>
      </h6>
      <h6 className="right2">
        Jonathan Ong
        <br></br>
        <br></br>
        <Button variant="outline-info" href="https://github.com/jonong1">
          GitHub
        </Button>
      </h6>
      <h6 className="right2">
        Wendy Chen
        <br></br>
        <br></br>
        <Button variant="outline-info" href="https://github.com/wendycchen">
          GitHub
        </Button>
      </h6>
      <h6 className="right3">
        Jamie Kim
        <br></br>
        <br></br>
        <Button variant="outline-info" href="https://github.com/JamieJiHeonKim">
          GitHub
        </Button>
      </h6>
    </div>
  </div>
);
