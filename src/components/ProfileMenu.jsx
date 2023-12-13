import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import riya from '../img/riya.png'
export default function ProfileMenu({logOut}) {
    const navigate = useNavigate();
    const [profileMenu, setProfileMenu] =useState(false);
    const handleDropDownMenu = () =>{
        setProfileMenu(!profileMenu);
    }
    const handleLogOut = () => {
        setProfileMenu(!profileMenu);
        logOut(false);
        navigate('/')
    }
  return (
    <div className="profileMenu">
        <div className="profileImage" onClick={handleDropDownMenu}>
            <img src={riya} alt="" />
        </div>
        <div className="profile-menu" style={{
            display: profileMenu ? "block":"none",
        }}>
            <div className="p-menu">
                <div className="profile-details">
                    <h5>Umme Humaira</h5>
                    <span>01300305439</span>
                </div>
                <NavLink to='/user-profile' className='profile-link' onClick={handleDropDownMenu}>Profile</NavLink>
                <button className='logOut' onClick={handleLogOut}>LogOut</button>
            </div>


        </div>
    </div>
  )
}
