import React from 'react'
import POPUP_BANNER_IMG from '../../../../assests/images/popup_banner.jpeg'
import './PopupBanner.css'
const PopupBanner = () => {
  return (
    <div>
        <img src={POPUP_BANNER_IMG} className='popup__banner__img'/>
    </div>
  )
}

export default PopupBanner