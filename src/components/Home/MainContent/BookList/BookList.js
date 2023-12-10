import React from 'react'
import BookControllers from '../BookControllers/BookControllers'
import BookCards from '../BookCards/BookCards'

const BookList = () => {
  return (
    <div>
        <BookControllers/>
        <BookCards/>
        <BookCards/>
    </div>
  )
}

export default BookList