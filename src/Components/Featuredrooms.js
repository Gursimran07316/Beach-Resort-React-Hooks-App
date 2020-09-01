import React,{useContext} from 'react'
import Room from './SingleRoom'
import Title from './Title'
import  Loading from './Loading'
import {GloabalContext} from '../context/GlobalState'
const Featuredrooms = () => {
    const{loading,featuredRooms}=useContext(GloabalContext)
    // console.log(featuredRooms,loading)
    const rooms=featuredRooms.map(room=><Room key={room.id} room={room}/>)
    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms"/>
            <div className='featured-rooms-center'>
            {loading?<Loading/>:rooms}
            </div>
        </section>
    )
}

export default Featuredrooms
