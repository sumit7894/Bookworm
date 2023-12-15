import React from 'react'
import BookControllers from '../BookControllers/BookControllers'
import BookCards from '../BookCards/BookCards'
import Loading from '../ShimmerUI/Loading/Loading'
import useProductContext from '../../../../hooks/useProductContex'
import './BookList.css'
const BookList = () => {
  const {cardData} = useProductContext();
  
  return (
    <div className='list__container'>
        <BookControllers/>
        {cardData.length === 0 ? <Loading/>
        :
        (cardData.map((card) => 
        <BookCards data = {card} count={card.comments.length}/>
        ))}
    </div>
  )
}

export default BookList