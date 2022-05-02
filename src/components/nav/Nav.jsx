import React from 'react'
import './nav.css'
import IMG_20220422_233339 from '../../ASSETS/IMG_20220422_233339.jpg'
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div className='permuta_nav'>
        <img src={IMG_20220422_233339} alt="logo1" />
        <AiOutlineMenu className='permuta_nav-icon' />
    </div>
  )
}

export default Nav