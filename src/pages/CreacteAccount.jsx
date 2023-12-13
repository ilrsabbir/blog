import React from 'react'
import signup from '../img/signup.jpg'
import { useNavigate } from 'react-router-dom';
export default function CreacteAccount() {
  const navigate = useNavigate();
  return (
    <div className='signup-page'>
      <div className="signup-card">
        <div className="signup-img">
          <img src={signup} alt="" />
          <h1>MARTIAN</h1>
        </div>
        <div className="signup-form">
          <div className="title">
            <span>Create New Account</span>
          </div>
          <form>
            <input type="text" placeholder="Username"/><br/>
            <input type="text" placeholder="Phone "/><br/>
            <input type="password" placeholder="Password"/><br/>
            <input type="password" placeholder="Confarm Password"/><br/>
            <button type="submit">Sign Up</button>
          </form>
          <div className='haveOneAccountBtn'>
            <button onClick={()=>{navigate('/login')}}>Already have an account?</button>
          </div>
        </div>
      </div>
    </div>
  )
}
