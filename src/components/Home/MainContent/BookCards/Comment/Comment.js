import React, { useEffect, useState } from 'react'
import './Comment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import BASE_URL from '../../../../../utils/constants'
import axios from 'axios'
import useProductContext from '../../../../../hooks/useProductContex'
const Comment = ({comments,bookId,handleCountUpdate}) => {
  const [cardComment,setCardComment] = useState([]);
  const [commentText,setCommentText] = useState();
  useEffect(()=>{
    setCardComment(comments);
  },[setCardComment])
  
  const handleChange =(e)=>{
    setCommentText(e.target.value);
  }
  const handleCount=()=>{
    handleCountUpdate((item)=>item+1);
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
      setCardComment((prevArray)=>[...prevArray,commentText]);
      setCommentText("");
      handleCount();
      console.log(response);
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
          {cardComment.map((item)=>
          (<div className='comment'><div className='bullet'/>
          <span>{item}</span>
          </div>)
          )}
        </div>
    </>
  )
}

export default Comment