import React from 'react'
import { About, Feature, Nav, Contact, Review, Brand, Form, Footer } from './components'
import './App.css'

const App = () =>  {
    return (
      <div className='permuta-bgc'>
          <div className='permuta-bgc1'>
            <Nav/>
            <About/>
          </div>
          <div className='permuta-bgc2'>
          <Feature/>
          <Contact/>
          <Review/>
          <Brand/>
          <Form/>
          <Footer/>
          </div>
      </div>
    )
}

export default App