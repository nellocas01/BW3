import { GET_PROFILES } from "../actions";

const initialState = {
  content: [],
}

const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        // content: [action.payload]
        content: action.payload.slice(0, 10),
      };
    default:
      return state;
  }
}
export default profilesReducer;