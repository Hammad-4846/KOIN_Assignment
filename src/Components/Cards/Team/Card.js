import React from 'react'

import "./Card.scss";

function Card({img,name,position,description}) {
  return (
    <div className='Card'>
        <div className='profile__info'>
            <img src={img} alt='profile'/>
            <p className='text'>{name}</p>
            <p className='posi'>{position}</p>
        </div>

        <div className='profile__description'>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card