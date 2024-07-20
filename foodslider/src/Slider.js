import React from 'react'
import Btn from './Btn.js'
import Details from './Details.js'
import { Link } from 'react-router-dom'



const Slider = ({list,imagelist,sliderChange,handleLeft,handleRight,handleOrder,handleClose,details,count,handleaddItems,handlesubItems,getamount,total}) => {
  return (
    <div className='slider' ref={sliderChange}>
        <div className='list' ref={imagelist} >
            {list.map((item)=>
            <div className={`slide`} key={item.id}><img className='slideimg' src={item.image} alt='Broken'></img>
                 <div className='content'>
                  <h1 className='title'>{item.title}</h1>
                  <h3 className='price'>{`RS:${item.price}`}</h3>
               <Link to={`/details/${item.id}`}> <button className='order' onClick={()=>handleOrder(item.id)}><span>order-now</span></button>
               </Link>
                  </div>
                  <Details list={list} grabid={details} count={count} handleaddItems={handleaddItems} handlesubItems={handlesubItems} getamount={getamount} total={total}/>   
            </div>
            )}
        </div>
        <Btn handleLeft={handleLeft} handleRight={handleRight} handleClose={handleClose} />
      
    </div>
  )
}

export default Slider
