import {Routes,Route} from "react-router-dom"
import {useState} from "react"
import Header from "./components/Header"
import UserList from "./components/UserList"
import  Form  from "./components/Form"
import data from "./data/data.json"
function App() {

  // nếu thay data.json thành data.js thì ở cuối file data.js ghi export default data và đặt data = []

  const [users,setUser] = useState(data);
  return (
    <>
      <Routes >
        <Route path = "/" element = {<Header></Header>}>
          <Route index element = {<UserList users = {users}/>}></Route>
          <Route path = "form" element = {<Form users = {users} setUser = {setUser}/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
