import React from 'react'
import {FaHeart,FaStar} from 'react-icons/fa'

const Details = ({grabid,count,handlesubItems,handleaddItems,getamount,total,list}) => {
  return (
    <div className='s'>
      <div className='details' >
    {grabid.map((detail)=>
      <div className='show-de' key={detail.id}>
        <h1 className='showtitle'>{detail.title}</h1>
        <h4 className='showprice'>Rs:{detail.price}</h4>
        <p className='des'>Description:<br></br>{detail.description}</p>
        <p className='rating'>{detail.rating}<FaStar/></p>

        <div className='ord-items'>
        <button className='sub-item'onClick={()=>handlesubItems()}>-</button>
          <label className='items-no' type='number'>{count}</label>
          <button className='add-item'onClick={()=>handleaddItems()}>+</button>
        </div>
        <div className='place-order'>
          <button className='item-order' ref={getamount} >{`Rs:${total}/-`}place-order</button>
          <button className='add-to-fav' title='add-to-fav'><FaHeart/></button>
        </div>
        </div>
        )}
    </div>

    <div className='group'>
        <div className='sim-con'>
        {list.map((listc)=>
          <div className='sim-slide' key={listc.id}><img className='small' src={listc.image} alt='broken'></img>
          <div className='sim-title'>
            <h2>{listc.title}</h2>
          </div>
          </div>
          
        
        )}
        </div>
    </div>
    </div>
  )
}

export default Details
