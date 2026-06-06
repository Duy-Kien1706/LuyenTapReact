import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import UserCreate from './pages/UserCreate';
import UserDetail from './pages/UserDetail';
import UserEdit from './pages/UserEdit';
import UserList from './pages/UserList';
import Login from './pages/Login';
import Protected from './layouts/Protected';
import data from "./data/data.json"

function App() {

    const [users,setUsers] = useState(data);

  return (
    <>
      <Routes>
        <Route path = "/" element = {<Protected isLogged = {true}/>}>
          <Route path = "/" element={<UserList users = {users}/>}></Route>
          <Route path="/users/add" element={<UserCreate />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
