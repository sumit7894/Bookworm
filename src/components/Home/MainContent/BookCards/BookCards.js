import React, { useEffect, useState } from 'react'
import './BookCards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment} from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment/Comment'
import axios from 'axios'
import BASE_URL from '../../../../utils/constants'

const BookCards = ({data}) => {
  const [showComments,setShowComments] = useState(false);
  const [upvotes,setUpvotes] = useState(data.upvotes);
  const [commentCount,setCommentCount] = useState(data.commentCount);
  
  useEffect(()=>{
    setUpvotes(data.upvotes);
    setCommentCount(data.commentCount);
  },[data.upvotes,data.commentCount])
  const handleCommentButton =()=>{
    setShowComments(!showComments);
  }
  const handleUpvote = async(id)=>{
    try {
      const response = await axios.patch(`${BASE_URL}/books/upvote`,{_id:id});
      if(response){
        setUpvotes((count)=>count +1);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='card__container'>
      <div className='book__card'>
        <div className='book__img'>
          <img src={`${data.logo}`}
          alt='book_cover'/>
        </div>
        <div className='book__card__content'>
          <span>{data.BookName}</span>
          <div className='book__card__description'>
            {data.description}
          </div>
          <div className='book__card__footer'>
            <div className='book__card__genre'>
              {data?.tags?.map((tag,index)=><span key={index}>{tag}</span>)}
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
            <span onClick={()=>handleUpvote(data._id)}>^</span>
            <span>{upvotes}</span>
          </div>
          <div className='card__comment__count'>
            {commentCount}<FontAwesomeIcon icon={faComment} className='fa__icon'/>
          </div>
        </div>
      </div>
      {showComments && (<div className='footer__comment__container'>
        <Comment comments={data.comments} bookId={data._id} key={data._id}
        setCommentCount={setCommentCount}
        />
      </div>)}
    </div>
    
  )
}

export default BookCards