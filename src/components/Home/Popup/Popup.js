import React from 'react'
import AddBookPopup from "./AddBookPopup/AddBookPopup"
import './Popup.css'
import PopupBanner from './PopupBanner/PopupBanner'
import useBookContext from '../../../hooks/useBookContext'
const Popup = () => {
  const {setPopup} = useBookContext();
  const handleCloseButton =()=>{
    setPopup(false);
  }
  return (
    <div className='popup__div'>
      <AddBookPopup/>
      <PopupBanner/>
      <button className='popup__close__button' onClick={handleCloseButton}>
        X
      </button>
    </div>
  )
}

export default Popup