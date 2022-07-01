import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Books from './Books'
import EditBook from './EditBook'
import SingleBook from './SingleBook'
import RequireAuth from '../components/RequireAuth'
const MainRoutes = () => {
  return (
     <Routes>
        <Route path="/" element={<Books/>} ></Route>
        <Route path="/books/:id" element={<SingleBook/>} ></Route>
        <Route path="/books/:id/edit" element={
        <RequireAuth>
          <EditBook/>
        </RequireAuth>
        } ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="*" element={<h1>page not found </h1>} ></Route>
     </Routes>
  )
}

export default MainRoutes