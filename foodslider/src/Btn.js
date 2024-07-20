import React from 'react'
import {BiSolidLeftArrow,BiSolidRightArrow} from 'react-icons/bi'
import {IoClose} from 'react-icons/io5'

const Btn = ({handleLeft,handleRight,handleClose}) => {
  return (
    <div className='btn'>
      <button className='left' onClick={()=>handleLeft()}><BiSolidLeftArrow/></button>
      <button className='right' onClick={()=>handleRight()}><BiSolidRightArrow/></button>
      <div className='close'>
      <button className='closebtn'onClick={()=>handleClose()}><IoClose/></button>
      </div>
    </div>
  )
}

export default Btn
