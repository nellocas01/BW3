const initialState = {
  favorites: [],
};

const jobFavoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_JOB_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FROM_JOB_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((job) => job._id !== action.payload),
      };
    default:
      return state;
  }
};

export default jobFavoritesReducer;
