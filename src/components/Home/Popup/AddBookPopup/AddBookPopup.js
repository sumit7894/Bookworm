import React from 'react'
import './AddBookPopup.css'
const AddBookPopup = () => {
  return (
    <div className='add__book__popup'>
      <input type='text' placeholder='Name of the Book'/>
      <input type='text' placeholder='Genre'/>
      <input type='text' placeholder='Add cover URL'/>
      <input type='text' placeholder='Link of the book'/>
      <input type='text' placeholder='Description'/>
      <button className='add__book__button'>Add Book +</button>
    </div>
  )
}

export default AddBookPopup