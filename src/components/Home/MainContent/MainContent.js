import React, { useEffect } from 'react'
import FilterBox from './FilterBox/FilterBox'
import BookList from './BookList/BookList'
import './MainContent.css'
import Popup from '../Popup/Popup'
import useProductContext from '../../../hooks/useProductContex'
import axios from 'axios'
import BASE_URL from '../../../utils/constants'
const MainContent = () => {
  const {popup} = useProductContext();

  const {setCardData,genre,setGenre} = useProductContext();
  useEffect(()=>{
    fetchBooks();
    // eslint-disable-next-line
  },[])
  const fetchBooks = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/books/all`);
      const card = response?.data?.data;
      setCardData(card);
      if(genre.length === 0){
        findUniqueGenre(card);
      }
    } catch (error) {
      console.log(error);

    }
  }
  const findUniqueGenre =(card)=>{
    const genres =[];
    card.forEach(item => {
      item.tags.forEach((tag)=>{
        if(!genres.includes(tag)){
          genres.push(tag);
        }
      })
    });
    setGenre(genres);

  }
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