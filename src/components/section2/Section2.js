import React, { Component } from "react";
import {
  Progress,
  Container,
  Col,
  Row,
  Input,
  Button,
  FormGroup,
  FormFeedback
} from "reactstrap";
import "./Section2.css";

class Section2 extends Component {
  state = {
    phone: "",
    email: "",
    password: "",
    validPass: false,
    validPhone: false,
    validEmail: false
  };

  setPhone = value => {
    this.setState({ phone: value });
  };

  setEmail = value => {
    this.setState({ email: value });
  };

  setPassword = value => {
    this.setState({ password: value });
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validatePhone = phoneNum => {
    let length = phoneNum.length;
    if (length !== 10 && length !== 13) {
      return false;
    } else if (
      length === 10 &&
      (phoneNum.charAt(0) === "2" || phoneNum.charAt(0) === "6")
    ) {
      return true;
    } else if (
      length === 13 &&
      phoneNum.charAt(0) === "+" &&
      (phoneNum.charAt(3) === "2" || phoneNum.charAt(3) === "6")
    ) {
      return true;
    }
    return false;
  };

  validatePassword = password => {
    let lower = false;
    let num = false;
    let capital = false;
    let symbol = false;

    if (password.length <= 8) {
      return false;
    }

    if (/^[a-zA-Z0-9]*$/.test(password) === false) {
      symbol = true;
    }

    for (var i = 0; i < password.length; i++) {
      if (password.charAt(i) === password.charAt(i).toUpperCase()) {
        capital = true;
      }
      if (password.charAt(i) === password.charAt(i).toLowerCase()) {
        lower = true;
      }
      if (!isNaN(password.charAt(i))) {
        num = true;
      }
    }
    console.log(lower, capital, num, symbol);
    if (lower && num && capital && symbol) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs="1" />
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
            <FormGroup>
              <Input
                invalid={
                  this.state.phone === "" || this.state.validPhone
                    ? false
                    : true
                }
                valid={this.state.validPhone}
                type="tel"
                onChange={e => {
                  this.setPhone(`${e.target.value}`);
                }}
                className="myInput"
                placeholder="Your Phone"
              />
              <FormFeedback invalid>
                The number should be 10 digits starting with 2 or 6 or 13
                starting with +30
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                invalid={
                  this.state.email === "" || this.state.validEmail
                    ? false
                    : true
                }
                valid={this.state.validEmail}
                type="email"
                onChange={e => {
                  this.setEmail(`${e.target.value}`);
                }}
                className="myInput"
                placeholder="Your Email"
              />
              <FormFeedback invalid>
                Your input is not in email form
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                invalid={
                  this.state.password === "" || this.state.validPass
                    ? false
                    : true
                }
                valid={this.state.validPass}
                type="password"
                onChange={e => {
                  this.setPassword(`${e.target.value}`);
                }}
                className="myInput"
                placeholder="Password"
              />
              <FormFeedback invalid>
                Password must be more than 8 characters contain at least 1
                capital, lower letter, a number and a symbol
              </FormFeedback>
            </FormGroup>
            <div className="text-center">
              <Button
                onClick={() => {
                  this.setState({
                    validEmail: this.validateEmail(this.state.email)
                  });
                  this.setState({
                    validPhone: this.validatePhone("2341091704")
                  });
                  this.setState({
                    validPass: this.validatePassword(this.state.password)
                  });
                }}
                className="myButton"
                color="primary"
              >
                {this.props.data.buttonText}
              </Button>
            </div>
          </Col>
          <Col xs="1" />
        </Row>
      </Container>
    );
  }
}

export default Section2;
