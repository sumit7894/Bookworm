import React, { useState } from 'react'
import './BookController.css'
import useProductContext from '../../../../hooks/useProductContex';
const BookControllers = () => {
    const {setPopup} = useProductContext();
    const [selectedOption,setSetSelectedOption] = useState();

    const handleOptionChange=(e)=>{
        setSetSelectedOption(e.target.value);
    }
    const handleAddBookButton=()=>{
        setPopup(true);
    }
  return (
    <div className='controller__bar'>
        <div className='controller__items'>
            <p>Suggestions</p>
            <div className='dropdown__div'>
            <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
                <option value="Upvotes">Upvotes</option>
                <option value="Comments">Comments</option>
            </select>
            </div>
        </div>
        <div className='addbook__button__controller__bar'>
            <button onClick={handleAddBookButton}>Add Book +</button>
        </div>
    </div>
  )
}

export default BookControllers