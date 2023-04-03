const initialValues = {
  isLoggedIn: false,
  loggedUser: null,
  token: "",
};

const loginReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return { ...state, isLoggedIn: true };
    case "SET_LOGOUT":
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

export default loginReducer;
