import React, { Component } from "react";
import { Row, Container, Col } from "reactstrap";
import "./NavBar.css";

import ImageGallery from "../imageGallery/ImageGallery";
import Section2 from "../section2/Section2";

class NavBar extends Component {
  state = { section1: false };

  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Row className={"navRow"}>
            <Col />
            <Col className={"navColumnMiddle"}>
              {this.props.data[0].description}
            </Col>
            <Col className={"navColumnRight"}>
              <div className={"sectionBox"}>
                <div
                  onClick={() => {
                    this.setState({ section1: true });
                  }}
                  className={"section"}
                  style={
                    this.state.section1
                      ? { color: "blue", fontWeight: "bold" }
                      : null
                  }
                >
                  Section 1
                </div>
                <div
                  onClick={() => {
                    this.setState({ section1: false });
                  }}
                  className={"section"}
                  style={
                    !this.state.section1
                      ? { color: "blue", fontWeight: "bold" }
                      : null
                  }
                >
                  Section 2
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {this.state.section1 ? (
          <ImageGallery images={this.props.data[0].sections[0].images} />
        ) : (
          <Section2 data={this.props.data[0].sections[1]} />
        )}
      </React.Fragment>
    );
  }
}

export default NavBar;
