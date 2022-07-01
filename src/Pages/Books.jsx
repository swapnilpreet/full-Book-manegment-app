import React from 'react'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import BookList from '../components/BookList'
import FilterSort from '../components/FilterSort'
// import { getBooks } from '../Redux/action'
import styled from 'styled-components'
const Books = () => {

// ................................. //remove from this add to booklist page 
    // const dispatch=useDispatch();    

    // const books =  useSelector((state)=>state.books)

    // useEffect(()=>{
    //     if(books.length === 0){
    //         dispatch(getBooks())
    //     }
    // },[])
    // console.log(books)
// .................................


  return (
    <div> 
        <h2>Books</h2>
        <BookPageWraper>
            <FillterSortWrapper>
                 <FilterSort/>
            </FillterSortWrapper>
            <BookListWrapper>
               <BookList/>
            </BookListWrapper>
        </BookPageWraper>
    </div>
  )
}

export default Books;


const BookPageWraper=styled.div`
    display:flex;
`

const FillterSortWrapper = styled.div`
width:300px;
border:1px solid red
`

const BookListWrapper = styled.div`
border:1px solid black;
width:100%;
display: grid;
grid-template-columns:repeat(auto-fit,minmax(310px,max-content));
grid-gap:16px;
justify-content: center;
padding:initial;
`