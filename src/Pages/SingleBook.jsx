import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getBooks } from '../Redux/AppReducer/action';

const SingleBook = () => {
  const dispatch=useDispatch();
  const {id} = useParams();
  const books=useSelector((state)=>state.AppReducer.books) //when we make two deffrent reducer so mention here state comes from which reducer(AppReducer)
  const [currentBook, setCurrentBook] = useState({})

  useEffect(() =>{  // when we refresh the deta will lose so this will help us to maintain data
   if(books.length===0){
    dispatch(getBooks());
   }
  },[books?.length,dispatch])


  useEffect(() => {
    if(id){
     const temp = books.find(book => book.id === Number(id))
     temp && setCurrentBook(temp);
    }
  },[books,id])

  console.log(currentBook)
  return (
    <div style={{display: 'flex', gap:'30px'}}>
      <div style={{width:"30%"}}>
         <img src={currentBook?.cover_photo} 
            width="100%"
            alt="cover_photo" />
      </div>
       <div>
       <h2>Book Name : {currentBook?.book_name}</h2>
        <h3>Author : {currentBook?.author}</h3>
        <h3>Release Year : {currentBook?.release_year}</h3>
        <h3>Category : {currentBook?.category}</h3>
        <h3>No of chapters : {currentBook?.No_of_chapters}</h3>
        <button><Link to={`/books/${currentBook.id}/edit`}>Edit</Link></button>
       </div>
      

    </div>
  )
}

export default SingleBook