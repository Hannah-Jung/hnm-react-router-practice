import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. There are three pages: All Products, Login, and Product Detail.
// 1-1. There's a navigation bar.
// 2. Users can browse all products on the All Products page.
// 3. Clicking the Login button opens the Login page.
// 4. If a user clicks a product while not logged in, they’re redirected to the Login page.
// 5. If a user is logged in, they can view the Product Detail page.
// 6. If a user logs out while on the Product Detail page, they’re redirected to the Login page.
// 7. When logged in, the Logout button is shown; when logged out, the Login button is shown.
// 8. Users can search for products.

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProductAll/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
      </div>
  )
}

export default App
