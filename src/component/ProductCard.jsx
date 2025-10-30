import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate()
  const showDetail=() => {
    navigate(`/product/${item.id}`)
  }
  return (
    <div onClick={showDetail}>      
      <div className='item-tags'>
        <img src={item?.img}/>
        {item?.new && <div className='item-tag-new'>NEW</div>}
        {item?.choice && <div className='item-tag-choice'>Conscious Choice</div>}
      </div>
            
      <div className='item-title'>{item?.title}</div>
      <div className='item-price'>${item?.price}</div>      
    </div>
  )
}

export default ProductCard