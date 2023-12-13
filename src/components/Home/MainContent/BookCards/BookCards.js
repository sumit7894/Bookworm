import React, { useState } from 'react'
import './BookCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment} from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment/Comment'

const BookCards = () => {
  const [showComments,setShowComments] = useState(false);
  const handleCommentButton =()=>{
    setShowComments(!showComments);
  }
  return (
    <div className='card__container'>
      <div className='book__card'>
        <div className='book__img'>
          <img src='https://cdn.kobo.com/book-images/97be33fd-6a46-463e-96f6-01ea95c37250/353/569/90/False/dead-eyed-one-of-the-most-gripping-crime-thriller-books-of-the-year-dci-michael-lambert-crime-series-book-1.jpg'
          alt='book_cover'/>
        </div>
        <div className='book__card__content'>
          <span>Crime and punishment</span>
          <div className='book__card__description'>
            On the greate book by a russian authorOn the  russian author
          </div>
          <div className='book__card__footer'>
            <div className='book__card__genre'>
              <span> Crime and thriller</span>
              <span> Murder</span>
              <span> Romantic</span>
            </div>
            <div className='book__card__comment' onClick={handleCommentButton}>
            <FontAwesomeIcon icon={faComment} className='fa__icon'/>Comments
            </div>
            <button className='book__card__edit__button'>
              Edit
            </button>
          </div>
        </div>
        <div className='card__right__section'>
          <div className='card__upvotes'>
            <span>^</span>
            <span>123</span>
          </div>
          <div className='card__comment__count'>
            93<FontAwesomeIcon icon={faComment} className='fa__icon'/>
          </div>
        </div>
      </div>
      {showComments && (<div className='footer__comment__container'>
        <Comment/>
      </div>)}
    </div>
    
  )
}

export default BookCards