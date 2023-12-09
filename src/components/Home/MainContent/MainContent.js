import React from 'react'
import FilterBox from './FilterBox/FilterBox'
import BookList from './BookList/BookList'
import './MainContent.css'
import Popup from '../Popup/Popup'
import useProductContext from '../../../hooks/useProductContex'
const MainContent = () => {
  const {popup,setPopup} = useProductContext();


  return (
    <div className='content__area'>
        <FilterBox/>
        <BookList/>
        {popup && (<div className='popup__overlay'>
          <Popup/>
        </div>)}
    </div>
  )
}

export default MainContent