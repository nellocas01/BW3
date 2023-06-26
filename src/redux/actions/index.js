// endpoint
const endpointSelectedProfile = "https://striveschool-api.herokuapp.com/api/profile/";
const endpointUserProfile = "https://striveschool-api.herokuapp.com/api/profile/me";
const endpointUserExperience = `https://striveschool-api.herokuapp.com/api/profile/`;
const endpointProfiles = "https://striveschool-api.herokuapp.com/api/profile/";

export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const GET_SELECTED_PROFILE = "GET_USER_PROFILE";
export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";
export const SET_USER_EXPERIENCE = "SET_USER_EXPERIENCE";
export const DELETE_USER_EXPERIENCE = "DELETE_USER_EXPERIENCE";
export const GET_PROFILES = "GET_PROFILES";

export const getUserProfileAction = () => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointUserProfile, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_USER_PROFILE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSelectedProfileAction = id => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointSelectedProfile + `${id === undefined ? "me" : id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch selected profile");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_SELECTED_PROFILE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserExperienceAction = userId => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(endpointUserExperience + userId + "/experiences", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch experience profile");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_USER_EXPERIENCE, payload: data });
      } else {
        console.log("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const getUserExperienceAction = userId => {
//   return async (dispatch, getState) => {
//     try {
//       let resp = await fetch(endpointUserExperience + userId + "/experiences", {
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
//         },
//       });
//       console.log("fetch experience profile");

//       if (resp.ok) {
//         const data = await resp.json();

//         dispatch({ type: GET_USER_EXPERIENCE, payload: data });
//       } else {
//         console.log("errore");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const setUserExperienceAction = (userId, experienceData) => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(endpointUserExperience + userId + "/experiences", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
        body: JSON.stringify(experienceData),
      });
      const data = await resp.json();
      dispatch({
        type: "SET_USER_EXPERIENCE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const deleteUserExperienceAction = value => ({ type: DELETE_USER_EXPERIENCE, payload: value });

// GET USERS PROFILE TO SIDEBAR
export const getProfilesAction = () => {
  return async (dispatch, getState) => {
    try {
      const resp = await fetch(endpointProfiles, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_PROFILES, payload: data });
      } else {
        console.log("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
