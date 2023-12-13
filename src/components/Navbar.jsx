import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ProfileMenu from './ProfileMenu';


export default function Navbar() {
  const [login, setLogin] = useState(true);
  const logOut = (logOut) => {
    setLogin(logOut);
  }
  return (
    <div className='nav'>
        <div className="container">
          <nav>
            <div className="logo">
              <NavLink to="/" className='logo-link'><h1>MARTIAN</h1></NavLink>
            </div>
            <menu>
              <NavLink to='/' className='page-link'>Home</NavLink>
              <NavLink to='/blog' className='page-link'>Blog</NavLink>
              <NavLink to='/contact' className='page-link'>Contact</NavLink>
              {login? '' : <NavLink to='/login' className='page-link'>Login</NavLink>}
              {login?<ProfileMenu logOut={logOut}/> : ''}
            </menu>  
          </nav>    
        </div>
    </div>
  )
}
