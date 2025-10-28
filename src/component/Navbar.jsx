import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const menuList = ['WOMEN', 'MEN', 'KID', 'HOME', 'BEAUTY']
  return (
    <div>
      <div className='top-row'>
        <div className='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder='Search...' />
        </div> 
        <div className='login-btn'>
          <FontAwesomeIcon icon={faCircleUser} size='lg'/>
          <div>Login</div>
        </div>
      </div>

      <div className='logo'>
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"/>        
      </div>
      <div style={{ width: '100px' }}></div>

      <div className='menu-area'>        
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li>{menu}</li>
            ))}
        </ul>               
      </div>
    </div>
  )
}

export default Navbar