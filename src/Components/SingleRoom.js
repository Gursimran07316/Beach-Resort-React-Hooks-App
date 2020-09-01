import React from 'react'
import defaultImg from '.././images/room-1.jpeg'
import {Link} from 'react-router-dom'

const Room = ({room}) => {
    const{name,price,slug,images}=room
    return (
        <article className='room'>
            <div className='img-container'>
              <img src={images[0]||defaultImg} alt='single room'/>
              <div className="price-top">
                  <h6>${price}</h6>
                  <p>per night</p>
              </div>
              <Link to={`rooms/${slug}`} className="btn-primary room-link">
                  Features
              </Link>
            </div>
    <p className='room-info'>{name}</p>
        </article>
    )
}

export default Room
