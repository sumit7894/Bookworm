import React from 'react'
import './Comment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
const Comment = () => {
  const cars = ["ldskjfklds","klsdfl"];
  return (
    <>
        <div className='comment__input__container'>
        <input type='text' placeholder='Add a comment...'/>
        <FontAwesomeIcon icon={faPlay} className='input__arrow__button'/>
        </div>
        <div className='comments__section'>
          {cars.map((cars)=>
          (<div className='comment'><div className='bullet'/>
          <span>{cars}</span>
          </div>)
          )}
        </div>
    </>
  )
}

export default Comment