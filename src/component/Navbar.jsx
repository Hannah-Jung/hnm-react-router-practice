import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faUser as faUserSolid, faHeart, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate }) => {
  const menuList = ['WOMEN', 'MEN', 'KID', 'HOME', 'BEAUTY']
  const navigate = useNavigate()
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);
  const toggleSearch = () => setSearchActive(!searchActive);
  const [menuWidth, setMenuWidth] = useState(0);
  const sideMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }

      if (menuWidth > 0 && sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setMenuWidth(0)
      }
    };   
  
    document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuWidth]);
  
    const goToLogin = () => {
      if (authenticate) {
      setAuthenticate(false)
      localStorage.removeItem("token")
      alert("Logged out successfully")
    } else {
      navigate('/login')
    }
    }
    const goToFavorite = () => {
      navigate('/favorite')
    }
    const goToCart = () => {
      navigate('/cart')
    }
    const goToHome = () => {
      navigate('/')
    }
    const search = (event) => { 
      // console.log("key pressed")
      if(event.key === "Enter"){
        // console.log("enter keyyy", event.key)
        let keyword = event.target.value.trim()       
        // console.log("keyword", keyword)
        if(keyword)
        navigate(`/?q=${keyword}`)
        searchRef.current.value = '';
      }
    }
  
  return (
    <div>
      <div className="side-menu" style={{ width: menuWidth }} ref={sideMenuRef}>
        <button className="close-btn" onClick={() => setMenuWidth(0)}>
          &times;
        </button>

        <div className="side-menu-list">
          {menuList.map((menu, index) => (
            <button key={index} onClick={() => { navigate('/'); setMenuWidth(0); }}>
              {menu}
            </button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="burger-menu">
          <FontAwesomeIcon icon={faBars} size="lg" onClick={() => setMenuWidth(150)} />
        </div>

      <div className='top-row'>
        <div className={`search ${searchActive ? 'active' : ''}`} >
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch}/>
          <input type="text" placeholder='Search...' ref={searchRef}  onKeyDown={(event)=>search(event)}/>
        </div>

        <div className='login-page-btn' onClick={goToLogin}>
          <FontAwesomeIcon icon={authenticate ? faUserSolid : faUserRegular} size='lg'/>
        </div>

        <div className='favorite-page-btn' onClick={goToFavorite}>
          <FontAwesomeIcon icon={faHeart} size='lg'/>
        </div>

        <div className='cart-page-btn' onClick={goToCart}>
          <FontAwesomeIcon icon={faCartShopping} size='lg'/>
        </div>
      </div>
    </div>
      

    <div className='logo' onClick={goToHome}>
      <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>        
    </div>
    <div style={{ width: '100px' }}></div>

    <div className='menu-area'>        
      <ul className='menu-list' onClick={goToHome}>
        {menuList.map((menu) => (
          <li><span>{menu}</span></li>
          ))}
      </ul>               
    </div>
  </div>
  )
}

export default Navbar