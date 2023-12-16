import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner';
import './Loading.css'
const Loading = () => {
  return (
  <div className='spinner__container'>
  <FidgetSpinner
  visible={true}
  height="180"
  width="180"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  ballColors={['#ff0000', '#00ff00', '#0000ff']}
  backgroundColor="#F4442E"
/>
</div>
  )
}

export default Loading