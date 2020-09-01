import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import RoomContainer from '../Components/RoomContainer'
import {Link} from 'react-router-dom'

 const Rooms = () => {
    return (
        <div>
            <Hero hero='roomsHero'>
                <Banner title='Our Rooms'>
                <Link to='/'>  
            <button className='btn-primary'>Return Home </button>
            </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </div>
    )
}
export default Rooms