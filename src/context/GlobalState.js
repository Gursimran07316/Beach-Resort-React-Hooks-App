import React, { useReducer,createContext,useEffect} from 'react'
import item from '../data'
import AppReducer from './AppReducer'
const intialState={
    rooms:[],
    sortedRooms:[],
    featuredRooms:[],
    loading:true,
    type:'all',
    capacity:1,
    price:0,
    maxPrice:0,
    minPrice:0,
    minSize:0,
    maxSize:0,
    breakfast:false,
    pets:false
}
const formatdata=items=>{
    let tempItem=items.map(item=>{
        let id=item.sys.id;
        let images=item.fields.images.map(image=>image.fields.file.url)
        let rooms={...item.fields,images,id}
        return rooms
    })
    return tempItem
}

export const GloabalContext=createContext(intialState)
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,intialState);
    useEffect(() => {
        dispatch({
            type:'INITAL_RENDER',
            payload:formatdata(item)
        })
    }, [])
    const filterrooms=(name,value)=>{
        let{rooms,
        pets,
        breakfast,
        minSize,
        maxSize,
        price,
        capacity,
        type
        }=state
        let tempRooms=[...rooms];
        // transform values
    capacity = parseInt(capacity);
    price = parseInt(price);
    // Checking change
    switch(name){
        case 'type':
           type=value
                break;
        case 'capacity':
            value=parseInt(value)
              capacity=value;
                break;
    
        case 'price':
            value=parseInt(value)
          price=value;
        break;
    
        case 'minSize':
            // console.log(value)
            minSize=value;
        break;
    
        case 'maxSize':
            // console.log(value)
       maxSize=value
        break;
    
        case 'breakfast':
         breakfast=value;
            break;
    
        case 'pets':
           pets=value;
            break;
    default:
        break;
    }   
        // Filter by type
        if(type!=='all'){
        tempRooms=tempRooms.filter(room=>room.type===type)
        }    
        // Filter by Capcity
        if(capacity!==1){
            tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
            }
        //   Filter ny price
    tempRooms=tempRooms.filter(room=>room.price<=price)
    // Filter by size
    tempRooms=tempRooms.filter(room=>room.size>=minSize&&room.size<=maxSize)
    // extras
    if(breakfast){
        tempRooms=tempRooms.filter(room=>room.breakfast===true)
    }
    if(pets){
        tempRooms=tempRooms.filter(room=>room.pets===true)
    }

    //    console.log(tempRooms)
    return tempRooms
    }
    // HandleChanges
    const handleChange= (e)=>{
        const target=e.target;
        const name=target.name;
        const value=target.type==='checkbox'?target.checked:target.value
        // console.log(name,value)
        // ****Filter rooms
      const filtered=  filterrooms(name,value)
    //   Dispatch changes
     dispatch({
         type:'UPDATE_STATE',
         payload:{
             name,
             value,
             filtered
         } 
     })
    }
     const getRoom=slug=>{
         const tempRooms=[...state.rooms];
         let room=tempRooms.find(rooms=>rooms.slug===slug);
         return room;
     }
    
    return(<GloabalContext.Provider value={{
        ...state,
        handleChange,
        getRoom,
    }}>
        {children}
    </GloabalContext.Provider>)
}