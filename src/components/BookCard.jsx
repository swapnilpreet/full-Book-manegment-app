import React from 'react'
// "book_name": "FDevelopment",
//       "author": "typicode",
//       "cover_photo": "http://",
//       "No_of_chapters":6,
//       "category":"Motivational",
//       "release_year":2015,
//       "chapters": [
//         {"name":"HTML","pages":25},
//         {"name":"CSS","pages":10}
//       ]
const BookCard = ({bookData}) => {
  return (
    <div> 
        <div> 
            <img src={bookData.cover_photo} 
            width="100%"
            alt="cover_photo" />
             <div>{bookData.book_name}</div>
             <div>{bookData.release_year}</div>
             <div>{bookData.category}</div>
        </div>
    </div>
  )
}

export default BookCard