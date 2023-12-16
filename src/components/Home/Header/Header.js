import React, { useEffect } from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import useBookContext from '../../../hooks/useBookContext'
const Header = () => {
  const {setIsSignup,isLoggedIn,setIsLoggedIn} = useBookContext();
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setIsLoggedIn(true);
    }
  },[setIsLoggedIn]);

  const handleLoginClick =()=>{
    navigate("/login");
    setIsSignup(false);
  }
  const handleSignupClick =()=>{
    navigate("/signup");
    setIsSignup(true);
  }
  const handleLogout =()=>{
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }
  return (
    <div className='nav'>
      <label className='logo'>Welcome to Bookworm!!</label>
      <ul>
        <li>
        {!isLoggedIn ? (<button onClick={handleLoginClick}>
        Login
        </button>) : (<h2>Hello!</h2>)}
        </li>
        <li>
        {!isLoggedIn ? (<button onClick={handleSignupClick}>
          Signup
        </button>):(<button onClick={handleLogout}>Logout</button>)}
        </li>
      </ul>
    </div>
  )
}

export default Header