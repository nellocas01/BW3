// endpoint
const endpointProfile = "https://striveschool-api.herokuapp.com/api/profile/";
const endpointUserProfile =
  "https://striveschool-api.herokuapp.com/api/profile/me";
const endpointPosts = "https://striveschool-api.herokuapp.com/api/posts/";
const endpointComments = "https://striveschool-api.herokuapp.com/api/comments/";
const endpointJobs = "https://strive-benchmark.herokuapp.com/api/jobs";

export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const GET_SELECTED_PROFILE = "GET_SELECTED_PROFILE";
export const GET_USER_EXPERIENCE = "GET_USER_EXPERIENCE";
export const ADD_USER_EXPERIENCE = "ADD_USER_EXPERIENCE";
export const EDIT_USER_EXPERIENCE = "EDIT_USER_EXPERIENCE";
export const DELETE_USER_EXPERIENCE = "DELETE_USER_EXPERIENCE";
export const GET_PROFILES = "GET_PROFILES";
export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_JOBS = "GET_JOBS";

export const getUserProfileAction = (setIsLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento Profilo in corso...");

      let resp = await fetch(endpointUserProfile, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch USER PROFILE");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_USER_PROFILE, payload: data });
      } else {
        throw new Error("Errore nel recupero del profilo");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const getSelectedProfileAction = (id, setIsLoading, setError) => {
  console.log(id);
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento Profilo selezionato in corso...");

      let resp = await fetch(endpointProfile + `${id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      console.log("fetch SELECTED PROFILE");

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_SELECTED_PROFILE, payload: data });
      } else {
        throw new Error("Errore nel recupero profilo selezionato");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const getUserExperienceAction = (userId, setIsLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento esperienze utente in corso...");

      let resp = await fetch(endpointProfile + userId + "/experiences", {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });

      if (resp.ok) {
        const data = await resp.json();

        dispatch({ type: GET_USER_EXPERIENCE, payload: data });
      } else {
        throw new Error("Errore nel recupero esperienze utente");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const addUserExperienceAction = (
  userId,
  experienceData,
  setIsLoading,
  setError
) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Aggiunta esperienza utente in corso...");
      const resp = await fetch(`${endpointProfile}:${userId}/experiences`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
        body: JSON.stringify(experienceData),
      });
      const data = await resp.json();
      dispatch({
        type: ADD_USER_EXPERIENCE,
        payload: data,
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const editUserExperienceAction = (
  userId,
  experienceId,
  experienceData,
  setIsLoading,
  setError
) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Modifica esperienza utente in corso...");
      const resp = await fetch(
        `${endpointProfile}${userId}/experiences/${experienceId}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
          },
          body: JSON.stringify(experienceData),
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: EDIT_USER_EXPERIENCE,
          payload: data,
        });
      } else {
        throw new Error("Errore durante la modifica dell'esperienza");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const deleteUserExperienceAction = (
  userId,
  experienceId,
  setIsLoading,
  setError
) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Elimina esperienza utente in corso...");
      const resp = await fetch(
        `${endpointProfile}${userId}/experiences/${experienceId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
          },
        }
      );
      if (resp.ok) {
        const data = await resp.json();
        dispatch({
          type: DELETE_USER_EXPERIENCE,
          payload: data,
        });
      } else {
        throw new Error("Errore durante la cancellazione dell'esperienza");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

// GET USERS PROFILE TO SIDEBAR
export const getProfilesAction = (setIsLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento Profili in corso...");

      const resp = await fetch(endpointProfile, {
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
        throw new Error("Errore nel recupero dei profili");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const getPostList = (setIsLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento dei post in corso...");
      const response = await fetch(endpointPosts, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

        dispatch({ type: GET_POSTS, payload: data });
      } else {
        throw new Error("Errore nel recupero dei post");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const addPost = (text, setIsLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Aggiunta del post in corso...");

      const response = await fetch(endpointPosts, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
        body: JSON.stringify({ text }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch({ type: ADD_POSTS, payload: data });
      } else {
        throw new Error("Errore nell'aggiunta del post");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const getComments = (setIsLoading, setError) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento commenti in corso");
      const response = await fetch(endpointComments, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      if (response.ok) {
        const data = await response.json();

        dispatch({ type: GET_COMMENTS, payload: data });
      } else {
        throw new Error("Errore nel recupero dei commenti");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};

export const getJobs = (setIsLoading, setError, filterType, value) => {
  return async (dispatch, getState) => {
    try {
      setIsLoading(true, "Caricamento jobs in corso...");
      let endpoint = endpointJobs;
      if (filterType === "search") {
        endpoint += `?search=${value}`;
      } else if (filterType === "company") {
        endpoint += `?company=${value}`;
      } else if (filterType === "category") {
        endpoint += `?category=${value}&limit=10`;
      }
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${process.env.REACT_APP_STRIVE_TOKEN}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_JOBS, payload: data });
      } else {
        throw new Error("Errore nel recupero dei jobs");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false, "");
    }
  };
};
