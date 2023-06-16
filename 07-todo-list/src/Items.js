import React from 'react'
import SingleItems from './SingleItems'

const Items = ({items,removeId}) => {
  return (
    <div className='items'>
      {items.map((item)=>{
        return <SingleItems key={item.id} {...item} removeId={removeId}/>


      })}
    </div>
  )
}

export default Items
