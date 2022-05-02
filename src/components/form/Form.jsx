import React from 'react'
import './form.css'
import Frame29 from '../../ASSETS/Frame29.png'

const Form = () => {
  return (
    <div className='permuta_form'>
      <div className='permuta_form-cnt1'>
        <div className='permuta_form-blue'></div>
        <div className='permuta_form-white'></div>
      </div>
      <img src={Frame29} alt="form" className='permuta_form-img' />
      <div className='permuta_form-cnt2'>
        <div className='permuta_form-padding'>
        <h1 className='permuta_form-h1'>CONTACT US</h1>
        <form action="/action_page.php" method="get">
          <label for="fname"></label>
          <input className='permuta_form-input1' type="text" id="fname" name="fname" placeholder='Enter your name' /> <br />
          <label for="lname"></label>
          <input className='permuta_form-input2' type="email" id="lname" name="lname" placeholder='Enter a valid email address' /> <br />
          <textarea className='permuta_form-ta' name="" id="" cols="30" rows="10"></textarea> <br />
          <input className='permuta_form-input3' type="submit" value="Submit" />
        </form>
        </div>
      </div>
    </div>
  )
}

export default Form