import React, { useEffect } from 'react'
import FilterBox from './FilterBox/FilterBox'
import BookList from './BookList/BookList'
import './MainContent.css'
import Popup from '../Popup/Popup'
import axios from 'axios'
import BASE_URL from '../../../utils/constants'
import useBookContext from '../../../hooks/useBookContext'
const MainContent = () => {

  const {setCardData,cardData,genre,setGenre,sortCard,selectedGenre,popup} = useBookContext();
  useEffect(()=>{
    fetchBooks();
    // eslint-disable-next-line
  },[selectedGenre,sortCard])
  const fetchBooks = async ()=>{
    try {
      const response = await axios.get(`${BASE_URL}/books/all`,{
        params:{
          sortBy:sortCard,
          genre:selectedGenre
        },
      });
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
        <BookList cardData={cardData}/>
        {popup && (<div className='popup__overlay'>
          <Popup/>
        </div>)}
    </div>
  )
}

export default MainContent