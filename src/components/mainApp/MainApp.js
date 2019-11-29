import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSlides, fetchHomeData } from "../../actions/mainActions";
import PropTypes from "prop-types";

import Loading from "../loading/Loading";
import Example from "../example/Example";
import NavBar from "../navBar/NavBar";

class MainApp extends Component {
  componentWillMount() {
    this.props.fetchSlides();
    this.props.fetchHomeData();
  }
  componentDidMount() {
    setTimeout(() => {
      console.log("SLIDES", this.props.slides);
      console.log("HOMEDATA", this.props.homeData);
    }, 3000);
  }

  render() {
    return this.props.slidesFetched && this.props.homeFetched ? (
      <React.Fragment>
        <Example slides={this.props.slides} />
        <NavBar data={this.props.homeData} />
      </React.Fragment>
    ) : (
      <Loading />
    );
  }
}

MainApp.propTypes = {
  fetchSlides: PropTypes.func.isRequired,
  fetchHomeData: PropTypes.func.isRequired,
  slides: PropTypes.array.isRequired,
  homeData: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  slides: state.main.slides,
  homeData: state.main.homeData,
  slidesFetched: state.main.slidesFetched,
  homeFetched: state.main.homeFetched
});

export default connect(mapStateToProps, { fetchSlides, fetchHomeData })(
  MainApp
);
