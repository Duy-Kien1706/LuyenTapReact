import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import ProductList from './components/ProductList'
import Form from './components/Form'
import data from "./data/data"
function App() {

  const [ products, setProduct ] = useState( data );

  return (
    <>
      <Header></Header>

      <div className="container-fluid " style={{ backgroundColor: "#D3D3D3",padding:"12px" }}>
        <div className="d-flex gap-4 px-4" >
          <div className="col-6" style={{ backgroundColor: "white",borderRadius: "12px" }}>
            <Form products = {products} setProduct = {setProduct} ></Form>
          </div>
          <div className="col-6" style={{ backgroundColor: "white",borderRadius: "12px" }}>
            <ProductList products={products}></ProductList>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
