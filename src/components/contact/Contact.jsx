import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='permuta_contact'>
            <div className='permuta_contact-c1'>
                <div className='permuta_contact-move1'>
                    <h1 className='permuta_contact-h1'>Ready To Try?</h1>
                    <p className='permuta_contact-p1'>sign up now for free</p>
                    <button className='permuta_contact-b1'>LEARN MORE</button>
                </div>
            </div>
            <div className='permuta_contact-c2'>
                <div className='permuta_contact-move2'>
                    <h1 className='permuta_contact-h2'>Wanna Know More?</h1>
                    <p className='permuta_contact-p2'>just write to us</p>
                    <button className='permuta_contact-b2'>CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default Contact