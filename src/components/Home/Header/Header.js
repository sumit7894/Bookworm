import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import useProductContext from '../../../hooks/useProductContex'
const Header = () => {
  const {isSignup,setIsSignup,loginPage,setLoginPage} = useProductContext();
  const navigate = useNavigate();
  const handleLoginClick =()=>{
    navigate("/login");
    setIsSignup(false);
  }
  const handleSignupClick =()=>{
    navigate("/signup");
    setIsSignup(true);
  }
  return (
    <div className='nav'>
      <label className='logo'>Welcome to Bookworm!!</label>
      <ul>
        <li><button onClick={handleLoginClick}>
        Login
        </button></li>
        <li><button onClick={handleSignupClick}>Signup</button></li>
      </ul>
    </div>
  )
}

export default Header