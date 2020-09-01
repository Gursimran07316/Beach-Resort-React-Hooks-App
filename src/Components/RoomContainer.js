import React,{useContext} from 'react'
import {GloabalContext} from '../context/GlobalState'
import RoomList from './RoomList'
import FilterRooms from './FilterRooms'
const RoomContainer = () => {
const{sortedRooms,loading,rooms}=useContext(GloabalContext)
if(loading){
    return <h1>Loading..</h1>
}  
return (
        <>
            <FilterRooms rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
        </>
    )
}

export default RoomContainer
