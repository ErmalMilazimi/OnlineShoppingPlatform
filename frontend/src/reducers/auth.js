const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case "USER_LOADED":
    case "SIGN_IN":
      return {
        ...state,
        user: action.user,
      };
    case "SIGN_UP":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.user
      };
    default:
        return state;
  }
}

export default authReducer


