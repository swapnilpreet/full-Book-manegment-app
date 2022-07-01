import * as types from "./actiontype";
import axios from "axios";

const getBooks = (params) => (dispatch) => {
  dispatch({ type: types.GET_BOOK_REQUEST });
  axios
    .get("/books",params)
    .then((r) => dispatch({ type: types.GET_BOOK_SUCCESS, payload: r.data }))
    .catch((err) => dispatch({ type: types.GET_BOOK_FAILUER }));
};

export {getBooks}