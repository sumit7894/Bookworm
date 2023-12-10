import React from 'react'
import './BookCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment} from '@fortawesome/free-solid-svg-icons'

const BookCards = () => {
  return (
    <div className='book__card__div'>
      <div className='book__logo'>
      <img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/CRED_%28FinTech_company%29_logo.png/220px-CRED_%28FinTech_company%29_logo.png'
      alt='cred'/>
      </div>
      <div className='card__content'>
        <div className='book__name'> BOOK NAME</div>
        <div className='book__description'>
        the descriptionHere is the description the descriptionHere is the descriptionthe  the description</div>
        <div className='upvotes__div'>
          <button>^</button>
          <div>Count</div>
        </div>
        <div className='card__footer'>
          <div className='card__tags'>
            tags
          </div>
        <div className='footer__comment__button'>
        <FontAwesomeIcon icon={faComment}/>Comment
        </div>
        <div className='footer__edit__button'>
          <button>Edit</button>
        </div>
        <div className='footer__comment__div__button'>
        Count <FontAwesomeIcon icon={faComment}/>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default BookCards