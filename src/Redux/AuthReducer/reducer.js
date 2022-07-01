import * as types from "./actiontype";

const InitialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isLoading: false,
        isError: false,
        isAuth: true,
      };
    case types.USER_LOGIN_FAILUER:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: "",
        isAuth: false,
      };

    default:
      return state;
  }
};

export { reducer };
