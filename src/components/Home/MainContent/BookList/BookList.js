import React, { useEffect, useState } from 'react'
import BookControllers from '../BookControllers/BookControllers'
import BookCards from '../BookCards/BookCards'
import axios from 'axios'
import BASE_URL from '../../../../utils/constants'
import Loading from '../ShimmerUI/Loading/Loading'
import useProductContext from '../../../../hooks/useProductContex'
import './BookList.css'
const BookList = () => {
  const {cardData,setCardData} = useProductContext();
  useEffect(()=>{
    fetchBooks();
  },[])
  const fetchBooks = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/books/all`);
      const card = response?.data?.data;
      setCardData(card);
      console.log("Yup here is card data",cardData);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("here is card data",cardData);
  return (
    <div className='list__container'>
        <BookControllers/>
        {cardData.map((card)=> <BookCards data = {card} count={card.comments.length}/>)}
    </div>
  )
}

export default BookList