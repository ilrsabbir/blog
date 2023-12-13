import React from 'react'
import { NavLink } from 'react-router-dom'
export default function AdminNav() {
  return (
    <div className='admin-nav'>
        <div className="admin-container">
          <nav>
            <div className="admin-logo">
              <NavLink to="/dashboard" className='logo-link'><h1>MARTIAN</h1></NavLink>
            </div>
            <menu>
              <NavLink to='/dashboard' className='admin-page-link'>Dashboard</NavLink>
              <NavLink to='/bloglist' className='admin-page-link'>Blog</NavLink>
              <NavLink to='/contactmassage' className='admin-page-link'>Message</NavLink>
              <NavLink to='/userlist' className='admin-page-link'>Users</NavLink>
            </menu>  
          </nav>    
        </div>
    </div>
  )
}
