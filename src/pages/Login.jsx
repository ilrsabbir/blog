import React from 'react'
import loginImg from '../img/login.jpg'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate();
  const handleLogInSubmit = (e) => {
    e.preventDefault();
    
  }
  return (
    <div className='login-page'>
      <div className="login-card">
        <div className="login-img">
          <img src={loginImg} alt="" />
          <h1>MARTIAN</h1>
        </div>
        <div className="login-form">
          <div className="title">
            <span>Login to your account</span>
          </div>
          <form onSubmit={handleLogInSubmit}>
            <input type="text" placeholder="Username"/><br/>
            <input type="password" placeholder="Password"/><br/>
            <button type="submit">Sign In</button>
          </form>
          <div className='forget-create'>
            <button onClick={()=>{navigate('/hash')}}>Forget Password?</button> <br />
            <button onClick={()=>{navigate('/create-account')}}>Create New Account?</button>
          </div>
        </div>
      </div>
    </div>
  )
}
