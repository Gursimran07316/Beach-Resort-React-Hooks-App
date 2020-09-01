import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import Services from '../Components/Services'
import {Link} from 'react-router-dom'
import FeaturedRooms from '../Components/Featuredrooms'
 const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title='Luxurious Rooms' subtitle='Deluxe Rooms starting at $299'>
                <Link to='/rooms'>  
            <button className='btn-primary'>Our Rooms</button>
            </Link>
                    </Banner>
                </Hero>
 <Services/>
 <FeaturedRooms/>
        </div>
    )
}
export default Home