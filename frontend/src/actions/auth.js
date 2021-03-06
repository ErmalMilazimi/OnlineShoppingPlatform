import axios from "axios";

export const signIn = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/user/login", user);
    dispatch({
      type: "SIGN_IN",
      user: res.data,
    });
    localStorage.setItem("loggedIn", true);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/user", user);
    dispatch({
      type: "SIGN_IN",
      user: res.data.jwt,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/user/user");
    if (res) {
      dispatch({
        type: "USER_LOADED",
        user: res.data,
      });
      localStorage.setItem("loggedIn", true);
    } else {
      localStorage.setItem("loggedIn", false);
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    await axios.post("/api/user/logout");

    dispatch({
      type: "LOGOUT",
      user: null,
    });
    localStorage.setItem("loggedIn", false);
  } catch (error) {
    console.log(error);
  }
};
