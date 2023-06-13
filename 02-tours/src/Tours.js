import React from 'react'
import Tour from './Tour'
const Tours = ({tours,removeItem}) => {
  return (
   <section>
     <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((items)=>{
            // eslint-disable-next-line array-callback-return
            return(
            <Tour key={items.id} {...items} removeItem={removeItem}/>)
        })}
        
      </div>

   </section>
  )
}

export default Tours
