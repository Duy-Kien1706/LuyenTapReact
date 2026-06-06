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

  const [ users, setUsers ] = useState( data );


const handleDeleteUser = (id) => {
    let newUsers = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i].id !== id) {
            newUsers.push(users[i]);
        }
    }

    setUsers(newUsers);
};


const addUsers = (user) =>{
  setUsers([...users,{id : users.length + 1, ...user}])
}



  return (
    <>
      <Routes>
        <Route path="/" element={<Protected isLogged={true} />}>
          <Route index element={<UserList users={users} onDelete={handleDeleteUser} />}></Route>
          <Route path="users/add" element={<UserCreate addUsers = {addUsers}/>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
