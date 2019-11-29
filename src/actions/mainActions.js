import { FETCH_HOME, FETCH_SLIDES } from "./types";
import axios from "axios";

export const fetchSlides = () => dispatch => {
  axios.get("https://voda-react-assessment.herokuapp.com/slider").then(res => {
    dispatch({ type: FETCH_SLIDES, payload: res });
  });
};

export const fetchHomeData = () => dispatch => {
  axios.get("https://voda-react-assessment.herokuapp.com/home").then(res => {
    dispatch({ type: FETCH_HOME, payload: res.data });
  });
};
