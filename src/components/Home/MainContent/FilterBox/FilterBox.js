import React from 'react'
import './FilterBox.css'
import useBookContext from '../../../../hooks/useBookContext'
const FilterBox = () => {
  const {selectedGenre,setSelectedGenre,genre} = useBookContext();
  const handleGenreClick =(genre)=>{
    if(selectedGenre.includes(genre)){
      selectedGenre.splice(selectedGenre.indexOf(genre),1);
      setSelectedGenre([...selectedGenre]);
    }
    else
    {
      setSelectedGenre([...selectedGenre,genre]);
    }
  }
  return (
    <div className='filter__box'>
        <div className='filter__heading__div'>
            <span>Book Genre</span>
            <span>Apply Filter</span>
        </div>
        <div className='book__genre__list'>
        <button onClick={()=>setSelectedGenre([])}
        style={{backgroundColor:selectedGenre.length === 0?"blue":""}}
        >All
        </button>
        {genre.map((item,index)=>
          <button 
          key={index}
          onClick={()=>handleGenreClick(item)}
          style={{backgroundColor:`${selectedGenre.includes(item) ? "blue":""}`}}
          >{item}</button>
        )}
        </div>
    </div>
  )
}

export default FilterBox