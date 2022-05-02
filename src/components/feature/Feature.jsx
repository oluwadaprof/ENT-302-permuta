import React from 'react'
import './feature.css'
import Frame28 from '../../ASSETS/Frame28.png'

const Feature = () => {
  return (
    <div className='permuta_feature-cnt1'>
      <div className='permuta_feature-margin'>
        <div className='permuta_feature-bg1'></div>
        <div className='permuta_feature-bg2'></div>
        <div className='permuta_feature-cnt2'>
          <img className='permuta_feature-img' src={Frame28} alt="image" />
          <div>
          <p className='permuta_feature-p1'>About Company</p> 
          <p className='permuta_feature-p2'>
            Permuta provides a platform for trade by exchange of your goods and services
            in equitably and securely given mutual consent and appreciation of the equitables.
          </p>
          </div>
        </div>
        <button className='permuta_feature-button'>Read More</button>
      </div>
    </div>
  )
}

export default Feature