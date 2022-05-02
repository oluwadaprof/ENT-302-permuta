import React from 'react'
import './review.css'
import Testimony from '../testimony/Testimony'
import ify2 from '../../ASSETS/ify2.jpg'
import p5 from '../../ASSETS/p5.jpg'
import p3 from '../../ASSETS/p3.jpg'
import p6 from '../../ASSETS/p6.jpg'


const Review = () => {
    return (
        <div>
            <h1 className='review-container-h1'>Read What Our Customer Say</h1>
            <div className='review-container-cnt2'>
            <Testimony name='Njoku Ifeanyi' status='COO Permuta' image={ify2}>
                <p>Designing and implementing buisness operations. Establishing policies that promote company culture and vision. 
                    Overseeing operations of the company and the work of executives.</p>
            </Testimony>
            <Testimony name='Celia Almedia' status='CEO Mailcharm'image={p5} >
                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. 
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque sit amet.
                    Sed turpis tincidunt id aliquet risus feugiat in ante metus.</p>
            </Testimony>
            <Testimony name='Celia Almedia' status='CEO Mailcharm' image={p3}>
                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. 
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque sit amet.
                    Sed turpis tincidunt id aliquet risus feugiat in ante metus.</p>
            </Testimony>
            <Testimony name='Celia Almedia' status='CEO Mailcharm' image={p6}>
                <p>Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. 
                    Ut sem nulla pharetra diam sit amet nisl. Enim nunc faucibus a pellentesque sit amet.
                    Sed turpis tincidunt id aliquet risus feugiat in ante metus.</p>
            </Testimony>
            </div>
            
        </div>
    )
}

export default Review