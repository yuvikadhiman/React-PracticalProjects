import React from 'react'

const Tour = ({...items},remove) => {
  const {id,name,image,info,price}=items
  console.log(items)
    return (
    <article className='single-tour'>
        <img src={image} alt=""  className='img'/>
        <span className='tour-price'>${price}</span>
        <div className='tour-info'>
        <h5>{name}</h5>

        {/* <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p> */}
        <button
          className='delete-btn btn-block btn'
          onClick={() => remove(id)}
        >
          not interested
        </button>
      </div>

    </article>
  )
}

export default Tour
