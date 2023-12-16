import React from 'react'
import BookControllers from '../BookControllers/BookControllers'
import BookCards from '../BookCards/BookCards'
import Loading from '../ShimmerUI/Loading/Loading'

import './BookList.css'
const BookList = ({cardData}) => {
  return (
    <div className='list__container'>
        <BookControllers/>
        {cardData.length === 0 ? <Loading/>
        :
        (cardData.map((card,index) => 
        <BookCards data = {card} key={index}/>
        ))}
    </div>
  )
}

export default BookList