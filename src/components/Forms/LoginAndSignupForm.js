import React, { useEffect, useState } from 'react'
import './LoginAndSignupForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser,faMobileButton ,faLock} from '@fortawesome/free-solid-svg-icons'
import useProductContext from '../../hooks/useProductContex'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import BASE_URL from '../../utils/constants'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
const LoginAndSignupForm = () => {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [mobile,setMobile] = useState();
  const [password,setPassword] = useState();
  const {isSignup,setIsSignup,isLoggedIn,setIsLoggedIn} = useProductContext();
  const location = useLocation();
  const currentRoute =location.pathname;
  const navigate = useNavigate();
  
  const handleNameChange =(e)=>{
    setName(e.target.value);
  }
  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }
  const handleMobileChange =(e)=>{
    setMobile(e.target.value);
  }
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }
  const handleSingup= async ()=>{
    const data = {name,email,mobile,password};
    try {
      const response = await axios.post(`${BASE_URL}/signup`,data);
      toast.success(response.data.message);
      window.localStorage.setItem("token",response.data.data[1].token);
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast(error.response.data.message, {
        icon: '⚠',
      });
    }
  }
  const handleLogin = async ()=>{
    const data = {email,password};
    try {
      const response = await axios.post(`${BASE_URL}/login`,data);
      toast.success(response.data.message);
      window.localStorage.setItem("token",response.data.token);
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      if(!error.response.data.success){
        toast(error.response.data.message, {
          icon: '⚠',
        });
      }else{
        console.log(error);
      }
    }
  }
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
            <input type='text' placeholder='Name' value={name} onChange={handleNameChange}/>
            </div>)}
            <div className='form__email'>
            <FontAwesomeIcon icon={faEnvelope} className='fa__icon'/>
            <input type='email' placeholder='Email' value={email} onChange={handleEmailChange}></input>
            </div>
            {isSignup && (<div className='form__mobile'>
            <FontAwesomeIcon icon={faMobileButton} className='fa__icon'/>
            <input type='numeric' placeholder='Mobile' value={mobile} onChange={handleMobileChange}/>
            </div>)}
            <div className='password'>
            <FontAwesomeIcon icon={faLock} className='fa__icon'/>
            <input type='password' placeholder='Passowrd' value={password} onChange={handlePasswordChange}/>
            </div>
            <div className='footer__headline'>
            {isSignup ? "Already have any account?" :"Don't have an account? Create a new one"}
              {isSignup ? 
              (<button onClick={toggle}>Login</button>):
              (<button onClick={toggle}>Signup</button>)}
              </div>
            {isSignup ? 
            (<button onClick={handleSingup} className='submit__button'>
            SignUp</button>
            ):
            (<button onClick={handleLogin} className='submit__button'>
            Login
            </button>)
            }
            <Toaster/>
        </div>
    </div>
  )
}

export default LoginAndSignupForm