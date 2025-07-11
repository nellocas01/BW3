import {
  DELETE_USER_EXPERIENCE,
  GET_USER_EXPERIENCE,
  ADD_USER_EXPERIENCE,
  EDIT_USER_EXPERIENCE,
} from "../actions";

const initialState = {
  content: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    case ADD_USER_EXPERIENCE:
      return {
        ...state,
        content: action.payload,
      };
    case EDIT_USER_EXPERIENCE:
      return {
        ...state,
        content: state.content.map((exp) =>
          exp._id === action.payload._id ? action.payload : exp
        ),
      };
    case DELETE_USER_EXPERIENCE:
      return {
        ...state,
        content: state.content.filter((item) => item._id !== action.payload),
      };
    default:
      return state;
  }
};
export default experienceReducer;
