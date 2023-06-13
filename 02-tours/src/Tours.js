import React from 'react'
import Tour from './Tour'
const Tours = ({tours,remove}) => {
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
            <Tour key={items.id} {...items} remove={remove}/>)
        })}
        
      </div>

   </section>
  )
}

export default Tours
