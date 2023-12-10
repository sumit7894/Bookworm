import React, { useEffect } from 'react'
import BookControllers from '../BookControllers/BookControllers'
import BookCards from '../BookCards/BookCards'
import axios from 'axios'
import BASE_URL from '../../../../utils/constants'
const BookList = () => {
  useEffect(()=>{
    fetchBooks();
  })
  const fetchBooks = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/books/all`);
      console.log(response);
    } catch (error) {
      
    }
  }
  return (
    
    <div>
        <BookControllers/>
        <BookCards/>
        <BookCards/>
    </div>
  )
}

export default BookList