import React, { useEffect } from 'react'
import './LoginAndSignupForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser,faMobileButton ,faLock} from '@fortawesome/free-solid-svg-icons'
import useProductContext from '../../hooks/useProductContex'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const LoginAndSignupForm = () => {
  const location = useLocation();
  const currentRoute =location.pathname;
  const navigate = useNavigate();
  const {isSignup,setIsSignup} = useProductContext();
  const toggle =()=>{
    {isSignup ? navigate('/login') : navigate('/signup')}
  }
  useEffect(()=>{
    setIsSignup(currentRoute==='/signup')
  },[currentRoute])
 
  return (
    <div>
      <div className='authentication__form'>
            { isSignup && (<div className='form__name'>
            <FontAwesomeIcon icon={faUser} className='fa__icon'/>
            <input type='text' placeholder='Name'/>
            </div>)}
            <div className='form__email'>
            <FontAwesomeIcon icon={faEnvelope} className='fa__icon'/>
            <input type='email' placeholder='Email'></input>
            </div>
            {isSignup && (<div className='form__mobile'>
            <FontAwesomeIcon icon={faMobileButton} className='fa__icon'/>
            <input type='numeric' placeholder='Mobile'></input>
            </div>)}
            <div className='password'>
            <FontAwesomeIcon icon={faLock} className='fa__icon'/>
            <input type='password' placeholder='Passowrd'></input>
            </div>
            <div className='footer__headline'>
            {isSignup ? "Already have any account?" :"Don't have an account? Create a new one"}
              {isSignup ? 
              (<button onClick={toggle}>Login</button>):
              (<button onClick={toggle}>Signup</button>)}
              </div>
            <button className='submit__button'>
              {isSignup ? "Signup" :"Login"}
            </button>
        </div>
    </div>
  )
}

export default LoginAndSignupForm