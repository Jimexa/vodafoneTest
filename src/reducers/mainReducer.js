import { FETCH_SLIDES, FETCH_HOME } from "../actions/types";

const initialState = {
  slides: [],
  homeData: [],
  slidesFetched: false,
  homeFetched: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SLIDES:
      console.log("In main Reducer fetch slides");
      return { ...state, slides: action.payload.data, slidesFetched: true };
    case FETCH_HOME:
      console.log("In main Reducer fetch home");
      return { ...state, homeData: action.payload, homeFetched: true };
    default:
      return state;
  }
}
