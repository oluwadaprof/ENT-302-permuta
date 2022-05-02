import React from 'react'
import './footer.css'
import IMG_20220422_233425 from '../../ASSETS/IMG_20220422_233425.jpg'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='permuta_footer'>
            <div className='permuta_footer-display'>
                <div className='permuta_footer-cnt1'>
                    <div className='permuta_footer-cnt1__1'>
                        <img src={IMG_20220422_233425} alt="footer" className='permuta_footer-img' />
                        <p className='permuta_footer-cnt1__p1'>PERMUTA</p>
                    </div>
                    <p className='permuta_footer-cnt1__p2'>A platform for trade by exchange of goods given mutual consent and appreciation
                    of what is exchanged.</p>
                    <div className='permuta_footer-cnt1__2'>
                        <AiFillInstagram className='permuta_footer-insta' />
                        <AiFillLinkedin className='permuta_footer-in' />
                        <AiFillFacebook className='permuta_footer-fb' />
                        <AiFillTwitterCircle className='permuta_footer-tweet' />
                    </div>
                </div>
                <div className='permuta_footer-cnt2'>
                    <h1 className='permuta_footer-cnt2__h1'>Useful Links</h1>
                    <ul>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Terms and Condition</li>
                    </ul>
                </div>
                <div className='permuta_footer-cnt3'>
                    <h1 className='permuta_footer-cnt3__h1'>Contact Us</h1>
                    <p className='permuta_footer-cnt3__p1'>Address : LASU Ojo. Lagos, Nigeria</p>
                    <p className='permuta_footer-cnt3__p2'>Phone: +2347066401270</p>
                    <p className='permuta_footer-cnt3__p3'>Email: permutang@gmail.com</p>
                </div>
                <div className='permuta_footer-cnt4'>
                    <h1 className='permuta_footer-cnt4__h1'>Subscribe Us!</h1>
                    <p className='permuta_footer-cnt4__p1'>which bears and sustains us, as it floats around us in an eternity of bliss.</p>
                </div>
            </div>
            <hr />
            <div className='permuta_footer-cnt5'>
                <p className='permuta_footer-cnt5__p1'>Terms of use|Privacy Environmental Policy</p>
                <p className='permuta_footer-cnt5__p2'>Copyright © 2022 Permuta. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer