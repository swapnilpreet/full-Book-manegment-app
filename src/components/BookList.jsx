import React, { useEffect } from "react";
import BookCard from "./BookCard";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/AppReducer/action";
import { Link, useLocation, useSearchParams } from "react-router-dom";





const BookList = () => {

  // ...................................... //added from book page 
  const books =  useSelector((state)=>state.AppReducer.books)
  const dispatch=useDispatch();
  const [searchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{
      if(books.length === 0 || location.search){
        const SortBy=searchParams.get("SortBy")
        let getTodoParams={
          params:{
              category:searchParams.getAll("category"),
              _sort:SortBy && "release_year",
              _order:SortBy,
          },
        }
          dispatch(getBooks(getTodoParams))
      }
  },[location.search]);
  console.log(books)

  // ......................................



  return (
    <>
      {books.length > 0 &&
        books.map((singlebook) => {
          return (
            <BookCardWrapper key={singlebook.id}>
              <Link to={`/books/${singlebook.id}`}> 
                <BookCard bookData={singlebook}/></Link>
               
            </BookCardWrapper>
          )
        })}
    </>
  );
};

export default BookList;


const BookCardWrapper =styled.div`
border:2px solid blue;
padding:5px;
width:310px;

`