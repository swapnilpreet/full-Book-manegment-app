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
  
  const handleeditform = (payload) => {
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
      <label>Change Cover Photo : </label>
      <input
        type="text"
        name="cover_photo"
        placeholder="image"
        onChange={handleChangeData}
      />
      <br />
       <label>Change Author Name : </label>
      <input
        type="text"
        name="author"
        placeholder="auth"
        onChange={handleChangeData}
      />
      <br />
      
      <label>Change Book Name : </label>
      <input
        type="text"
        name="book_name"
        placeholder="book_name"
        onChange={handleChangeData}
      />
      <br />
      <label>Change Category : </label>
      <input
        type="text"
        name="category"
        placeholder="category"
        onChange={handleChangeData}
      />
      <br />
      <label>Change Release Year : </label>
      <input
        type="text"
        name="release_year"
        placeholder="release_year"
        onChange={handleChangeData}
      />
      <br />
      <br />
      <div style={{marginLeft:"80px"}}>
      <button onClick={() => handleeditform(form)}>Save Chnages</button>
      </div>
      
    </div>
  );
};

export default EditBook;
