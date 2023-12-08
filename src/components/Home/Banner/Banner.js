import React from 'react'
import BANNER_IMG from "../../../assests/images/reading_book.jpeg"
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <img src={BANNER_IMG}/>
        <div className='banner_content'>
            <h2>Hey!! Add your favourite books here.</h2>
            <h4>"See what other peoples have listed the beautiful books for you.
                Suggest your favourite books too by listing"
            </h4>
        </div>
    </div>
  )
}

export default Banner