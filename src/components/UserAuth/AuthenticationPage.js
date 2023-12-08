import React from 'react'
import './AuthenticationPage.css'
import LoginAndSignupForm from '../Forms/LoginAndSignupForm'
const AuthenticationPage = () => {
  return (
    <div className='auth__page'>
      <div className='logo'>
        Bookworm
      </div>
      <div className='auth__form'>
      <LoginAndSignupForm/>
        </div>
    </div>
  )
}

export default AuthenticationPage