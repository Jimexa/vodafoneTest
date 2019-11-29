import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "./ImageGallery.css";

class ImageGallery extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className={"contain"} fluid={true}>
          <Row>
            <Col />
            <Col>
              <Row>
                <img
                  style={{ height: "50vh" }}
                  className={"imag"}
                  src={this.props.images[0].img}
                  alt={"waveImage"}
                />
              </Row>
            </Col>
            <Col>
              <Row>
                <img
                  alt={"waveImage"}
                  className={"imag"}
                  src={this.props.images[1].img}
                />
              </Row>
              <Row>
                <img
                  alt={"waveImage"}
                  className={"imag"}
                  src={this.props.images[2].img}
                />
              </Row>
            </Col>
            <Col>
              <Row>
                <img
                  alt={"waveImage"}
                  className={"imag"}
                  src={this.props.images[3].img}
                />
              </Row>
              <Row>
                <img
                  alt={"waveImage"}
                  className={"imag"}
                  src={this.props.images[4].img}
                />
              </Row>
            </Col>
            <Col />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default ImageGallery;
