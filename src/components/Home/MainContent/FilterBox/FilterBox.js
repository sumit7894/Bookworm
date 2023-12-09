import React from 'react'
import './FilterBox.css'
const FilterBox = () => {
  return (
    <div className='filter__box'>
        <div className='filter__heading__div'>
            <span>Book Genre</span>
            <span>Apply Filter</span>
        </div>
        <div className='book__genre__list'>
        <button>All</button>
        <button>Crime and thriller</button>
        <button>Romantic</button>
        <button>Drama</button>
        <button>All</button>
        <button>Crime and thriller</button>
        <button>Romantic</button>
        <button>Drama</button>
        </div>
    </div>
  )
}

export default FilterBox