import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoverPicture from "../images/CoverPicture.svg";

class Cover extends React.Component {
  render() {
    return (
      <Container fluid style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Row className="cover" id="home">
          <Col lg={6}>
            <div className="coverName">Brian Cheung</div>
            <div className="coverDescription">
              <div className="flip">
                <div>
                  <div>Webdeveloper</div>
                </div>
                <div>
                  <div>and</div>
                </div>
                <div>
                  <div>Software Engineer</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src={CoverPicture}
              alt="placeholder"
              width="100%"
              height="auto"
            ></img>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Cover;