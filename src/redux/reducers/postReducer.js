import { ADD_POSTS, GET_POSTS } from "../actions";

const initialState = {
  content: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        // content: [action.payload]
        content: action.payload,
      };
    case ADD_POSTS:
      return {
        ...state,
        content: [action.payload, ...state.content],
      };

    default:
      return state;
  }
};
export default postReducer;
