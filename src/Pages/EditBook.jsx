import React, { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { getBooks } from "../Redux/AppReducer/action.js";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  
  const handleEditPost = (payload) => {
    axios
      .patch(`/books/${id}`, payload)
      .then((res) => {dispatch(getBooks())
      navigate(`/books/${id}`,{replace:true});
     
      })
     
  };
  return (
    <div>
      EditBook
       <br />
      <input
        type="text"
        name="author"
        placeholder="auth"
        onChange={handleChangeData}
      />
      <br />
      <input
        type="text"
        name="cover_photo"
        placeholder="image"
        onChange={handleChangeData}
      />
      <br />
      <input
        type="text"
        name="book_name"
        placeholder="Book Name"
        onChange={handleChangeData}
      />
      <br />
      <input
        type="text"
        name="category"
        placeholder="category"
        onChange={handleChangeData}
      />
      <br />
      <input
        type="text"
        name="release_year"
        placeholder="release_year"
        onChange={handleChangeData}
      />
      <br />
      <button onClick={() => handleEditPost(form)}>Save</button>
    </div>
  );
};

export default EditBook;
