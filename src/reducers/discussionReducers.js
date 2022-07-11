import _ from "lodash";
import { GET_DISCUSSION } from "../constants/actionTypes";

const initialState = {
  discussion: [],
};

export default function getDiscussion(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DISCUSSION:
      console.log(payload);
      const discussion = payload;
      return { ...state, discussion };
    default:
      return state;
  }
}
