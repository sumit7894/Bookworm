import React, { useEffect, useState } from 'react'
import BookControllers from '../BookControllers/BookControllers'
import BookCards from '../BookCards/BookCards'
import axios from 'axios'
import BASE_URL from '../../../../utils/constants'
import Loading from '../ShimmerUI/Loading/Loading'
import useProductContext from '../../../../hooks/useProductContex'
const BookList = () => {
  const {cardData,setCardData} = useProductContext();
  useEffect(()=>{
    fetchBooks();
  },[])
  const fetchBooks = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/books/all`);
      console.log(response);
      const card = response?.data?.data;
      setCardData(card);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    
    <div>
        <BookControllers/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
        <BookCards/>
    </div>
  )
}

export default BookList