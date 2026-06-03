import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/Products";
import Default from "./layouts/Default";

function App() {

  return (
    <>
<button className="btn btn-primary">
  Test Bootstrap
</button>

    </>
  )
}

// cách set up react-router-dom
// Bước 1: npm i react-router-dom
// Bước 2: nhúng vào main.js 
// import {BrowserRouter} from "react-router-dom"
// <BrowserRouter> <App/> <BrowserRouter>

// cách đẩy bootstrap vào react
// Bước 1:  npm install bootstrap
// Bước 2: import 'bootstrap/dist/css/bootstrap.min.css' vào main.js

export default App
