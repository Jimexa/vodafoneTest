import React, { Component } from "react";
import { Progress, Container, Col, Row, Input, Button } from "reactstrap";
import "./Section2.css";

class Section2 extends Component {
  state = { phone: "", email: "", password: "" };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h6>{this.props.data.title}</h6>
            <h4>{this.props.data.graphText}</h4>
            <div className="text-left progressText">
              {this.props.data.stats[0].title}
            </div>
            <div className="text-right progressText">60%</div>
            <Progress
              className="bar1"
              max={1000}
              value={this.props.data.stats[0].amount}
            />
            <div className="text-left progressText">
              {this.props.data.stats[1].title}
            </div>
            <div className="text-right progressText">20%</div>
            <Progress
              max={1500}
              color="success"
              value={this.props.data.stats[1].amount}
            />
            <div className="text-left progressText">
              {this.props.data.stats[2].title}
            </div>
            <div className="text-right progressText">5%</div>
            <Progress
              max={6000}
              color="warning"
              value={this.props.data.stats[2].amount}
            />
            <div className="text-left progressText">
              {this.props.data.stats[3].title}
            </div>
            <div className="text-right progressText">25%</div>
            <Progress
              max={3200}
              color="danger"
              value={this.props.data.stats[3].amount}
            />
          </Col>
          <Col>
            <h5 className="text-center">{this.props.data.formText}</h5>
            <p className="text-center">
              We work with ecosystem leaders, corporations and startups
              worldwide. How can we help you?
            </p>
            <Input
              type="tel"
              id="phone"
              className="myInput"
              placeholder="Your Phone"
            />
            <Input type="email" className="myInput" placeholder="Your Email" />
            <Input type="password" className="myInput" placeholder="Password" />
            <Button className="myButton" color="primary">
              {this.props.data.buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Section2;
