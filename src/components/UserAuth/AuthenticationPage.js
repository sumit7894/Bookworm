import React from 'react'
import './AuthenticationPage.css'
import LoginAndSignupForm from '../Forms/LoginAndSignupForm'
const AuthenticationPage = () => {
  return (
    <div className='auth__page'>
      <div className='logo'>
        Bookworm
      {/* <h2>Do share your beautiful review with us!!</h2> */}
      </div>
      <div className='auth__form'>
      <LoginAndSignupForm/>
        </div>
    </div>
  )
}

export default AuthenticationPage