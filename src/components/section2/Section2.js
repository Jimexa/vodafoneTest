import React, { Component } from "react";
import { Progress, Container, Col, Row, Input, Button } from "reactstrap";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import "./Section2.css";

class Section2 extends Component {
  state = { phone: "", email: "", password: "" };

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
    // const phone = parsePhoneNumberFromString(phoneNum);
    // let bool = phone.isValid();
    // console.log(bool);
    let length = phoneNum.length;
    if (length !== 10 && length !== 13) {
      return false;
    } else if (
      length === 10 &&
      (phoneNum.charAt(0) === "2" || phoneNum.charAt(0) === "6")
    ) {
      return true;
    } else if (length === 13 && phoneNum.charAt(0) === "+") {
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

    if (/^[a-zA-Z0-9]*$/.test(password) == false) {
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
              onChange={e => {
                this.setPhone(`${e.target.value}`);
              }}
              className="myInput"
              placeholder="Your Phone"
            />
            <Input
              type="email"
              onChange={e => {
                this.setEmail(`${e.target.value}`);
              }}
              className="myInput"
              placeholder="Your Email"
            />
            <Input
              valid
              type="password"
              onChange={e => {
                this.setPassword(`${e.target.value}`);
              }}
              className="myInput"
              placeholder="Password"
            />
            <div className="text-center">
              <Button
                onClick={() => {
                  alert(this.validateEmail(this.state.email));
                  alert(this.validatePhone("2341091704"));
                  alert(this.validatePassword("#pA4aaaaaaa___aaaa$"));
                }}
                className="myButton"
                color="primary"
              >
                {this.props.data.buttonText}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Section2;
