import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser as faUserRegular } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass, faUser as faUserSolid, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate}) => {
  const menuList = ['WOMEN', 'MEN', 'KID', 'HOME', 'BEAUTY']
  const navigate = useNavigate()
  const [searchActive, setSearchActive] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => setSearchActive(!searchActive);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    };
  
  document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const goToLogin = () => {
    navigate('/login')
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
  
  return (
    <div>
      <div className='top-row'>
        <div className={`search ${searchActive ? 'active' : ''}`} ref={searchRef}>
          <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch}/>
          <input type="text" placeholder='Search...'/>
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