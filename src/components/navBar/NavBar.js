import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import "./NavBar.css";

import ImageGallery from "../imageGallery/ImageGallery";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Row className={"navRow"}>
            <Col />
            <Col className={"navColumn"}>{this.props.data[0].description}</Col>
            <Col />
          </Row>
        </Container>
        <ImageGallery images={this.props.data[0].sections[0].images} />
      </React.Fragment>
    );
  }
}

export default NavBar;
