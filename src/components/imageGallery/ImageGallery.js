import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import "./ImageGallery.css";

class ImageGallery extends Component {
  render() {
    return (
      <Container className={"contain"} fluid={true}>
        <Row>
          <Col>
            <img className={"imag"} src={this.props.images[0].img} />
          </Col>
          <Col>
            <Row>
              <img src={this.props.images[1].img} />
            </Row>
            <Row>
              <img src={this.props.images[2].img} />
            </Row>
          </Col>
          <Col>
            <Row>
              <img src={this.props.images[3].img} />
            </Row>
            <Row>
              <img src={this.props.images[4].img} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ImageGallery;
