import React from 'react'
import './BookController.css'
import useBookContext from '../../../../hooks/useBookContext';
const BookControllers = () => {
    const {setPopup,sortCard,setSortCard} = useBookContext();

    const handleOptionChange=(e)=>{
        setSortCard(e.target.value);
    }
    const handleAddBookButton=()=>{
        setPopup(true);
    }
  return (
    <div className='controller__bar'>
        <div className='controller__items'>
            <p>Suggestions</p>
            <div className='dropdown__div'>
            <select className="dropdown" value={sortCard} onChange={handleOptionChange}>
                <option value="Upvotes">Upvotes</option>
                <option value="commentCount">Comments</option>
            </select>
            </div>
        </div>
        <div className='addbook__button__controller__bar'>
            <button 
            className='add__book__controller'
            onClick={handleAddBookButton}>Add Book +</button>
        </div>
    </div>
  )
}

export default BookControllers