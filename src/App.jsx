import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';
import Banner from './component/Banner'
import Favorite from './page/Favorite';
import Cart from './page/Cart';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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
  const [authenticate, setAuthenticate] = useState(false)
  const location = useLocation()
  useEffect(() => {
    console.log("authenticated", authenticate)
  },[authenticate])
  return (
      <div className="app-container">
        <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
        {location.pathname === "/" && <Banner />}
        <div className='main-content'>
        <Routes>
          <Route path="/" element={<ProductAll/>}/>
          <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
          <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
          <Route path="/favorite" element={<Favorite/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </div>        
        <Footer />
      </div>
  )
}

export default App
