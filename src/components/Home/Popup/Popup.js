import React from 'react'
import AddBookPopup from "./AddBookPopup/AddBookPopup"
import './Popup.css'
import PopupBanner from './PopupBanner/PopupBanner'
const Popup = () => {
  return (
    <div className='popup__div'>
      <AddBookPopup/>
      <PopupBanner/>
      <button className='popup__close__button'>X</button>
    </div>
  )
}

export default Popup