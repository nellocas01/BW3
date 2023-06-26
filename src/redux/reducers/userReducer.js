import { GET_USER_PROFILE } from "../actions"

const initialState = {
  content: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state;
  }
}
export default userReducer;