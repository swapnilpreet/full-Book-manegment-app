import * as types from "./actiontype";

const InitialState = {
  books: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_BOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_BOOK_SUCCESS:
      return {
        ...state,
        books: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_BOOK_FAILUER:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export  { reducer};
