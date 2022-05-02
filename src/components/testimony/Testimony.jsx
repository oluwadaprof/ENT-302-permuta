import React from 'react';

import './testimony.css'

const Testimony = ({rep, name, status, children}) => {
  return (
    <div className='permuta_testimony'>
         <img className='permuta_testimony-img' src={rep} alt="testimony" />
        <div className='permuta_testimony-cnt2'>
            <p className='permuta_testimony-p1' > {name} </p>
            <p className='permuta_testimony-p2'> {status} </p>
            <p className='permuta_testimony-p3'> {children} </p>
        </div>
    </div>
  )
}

export default Testimony