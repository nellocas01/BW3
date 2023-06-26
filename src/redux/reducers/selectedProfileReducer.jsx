import { GET_SELECTED_PROFILE } from "../actions";

const initialState = {
  content: [],
};

const selectedProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELECTED_PROFILE:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default selectedProfileReducer;
