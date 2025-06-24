const initialState = {
  followed: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW_USER":
      return {
        ...state,
        followed: [...state.followed, action.payload],
      };
    case "UNFOLLOW_USER":
      return {
        ...state,
        followed: state.followed.filter(userId => userId !== action.payload),
      };
    default:
      return state;
  }
};

export default friendReducer;
