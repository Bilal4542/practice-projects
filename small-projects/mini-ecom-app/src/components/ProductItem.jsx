import React from 'react'

const ProductItem = ({pro}) => {
  return (
    <div>
      <div className="shadow-lg text-center py-2">
                <img src={pro.thumbnail} className='w-full h-56' alt="" />
                <h3>{pro.title}</h3>
                <b>Rs - {pro.price}</b>
              </div>
    </div>
  )
}

export default ProductItem
