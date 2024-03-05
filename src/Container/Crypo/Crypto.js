import React from 'react'

import "./Crypto.scss"
import Carousel from '../../Components/Carousel/Carousel'

function Crypto({graphData}) {
  return (
    <div className='crypto__container'>
        <h2>You May Also Like</h2>


        <div className='crypto__container-carousel'>
            <Carousel cards={graphData} isGraph={true} cardWidth={400} cardsPerSlide={5}/>
        </div>

        <div className='crypto__container-carousel'>
            <Carousel cards={graphData} isGraph={true} cardWidth={400} cardsPerSlide={5}/>
        </div>
    </div>
  )
}

export default Crypto