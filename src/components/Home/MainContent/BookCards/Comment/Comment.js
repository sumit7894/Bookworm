import React, { useEffect, useState } from 'react'
import './Comment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import BASE_URL from '../../../../../utils/constants'
import axios from 'axios'
const Comment = ({comments,bookId,setCommentCount}) => {
  const [cardComment,setCardComment] = useState([]);
  const [commentText,setCommentText] = useState();
  useEffect(()=>{
    setCardComment(comments);
    // eslint-disable-next-line
  },[setCardComment])
  
  const handleChange =(e)=>{
    setCommentText(e.target.value);
  }
  
  const handleAddComment= async()=>{
    if(commentText ===""){
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/books/comment`,
      {
        id:bookId,
        comment:commentText
      })
      if(response)
      {
      setCardComment((prevArray)=>[...prevArray,commentText]);
      setCommentCount((item)=>item+1);
      setCommentText("");
      }
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
        <div className='comment__input__container'>
        <input type='text' placeholder='Add a comment...'
        onChange={handleChange} value={commentText}
        />
        <FontAwesomeIcon icon={faPlay} className='input__arrow__button'
        onClick={()=>handleAddComment()}
        />
        </div>
        <div className='comments__section'>
          {cardComment.map((item,index)=>
          (<div key={index} className='comment'><div className='bullet'/>
          <span>{item}</span>
          </div>)
          )}
        </div>
    </>
  )
}

export default Comment