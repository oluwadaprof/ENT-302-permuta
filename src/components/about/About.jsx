import React from 'react'
import './about.css'
import IMG_20220422_233425 from '../../ASSETS/IMG_20220422_233425.jpg'
import Frame27 from '../../ASSETS/Frame27.png'
import circle from '../../ASSETS/circle.png'

const About = () => {
  return (
    <div className='permuta_about'>
      <div className='permuta_about-margin'>
        <img className='permuta_about__img-logo' src={IMG_20220422_233425} alt="logo2" />
        <p><strong>Permuta</strong ></p> 
        <p className='permuta_about-p1'>Fair and Impartial Trade</p> 
        <p className='permuta_about-p2'> Permuta provides an anchor for money unlike the present day goods and services exchange.
        we facilitate trade, quick market discovery and customer satisfaction derived from their trade. our goal is to diversify 
        from faith based monetary value and provision of exchange of goods and services given mutual consent and appreciation of what is being exchanged.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div>
        <img className='permuta_about__img-thinking' src={Frame27} alt="innovative thinking" />
        <img className='permuta_about-circle' src={circle} alt="circle" />
      </div>
    </div>
  )
}

export default About