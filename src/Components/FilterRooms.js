import React,{useContext} from 'react'
import Title from './Title'
import {GloabalContext} from '../context/GlobalState'
const getUnique=(items,value)=>{
    return[...new Set(items.map(item=>item[value]))]
}
const FilterRoom = ({rooms}) => {
const{type,capacity,
    minPrice,maxPrice,
    price,minSize
    ,maxSize,pets,
    breakfast,handleChange}=useContext(GloabalContext)
// console.log(minPrice,maxPrice) 
// Getting room types
    let types=getUnique(rooms,'type')
    // console.log(types)
    types=['all',...types]
types=types.map((item,i)=>{
return<option key={i} value={item}>{item}</option>
})
// Getting people
    let people=getUnique(rooms,'capacity')
    // console.log(people)
people=people.map((item,i)=>{
return<option key={i} value={item}>{item}</option>
})
    return (
        <section className="filter-container">
            <Title title='Search Rooms'/>
           <form className='filter-form'>
               <div className="form-group">
                   <label htmlFor='type'>Room type</label>
                   <select name="type" 
                   id='type' className='form-control'
                    value={type} onChange={handleChange}>
                       {types}
                   </select>
               </div>
               <div className="form-group">
               <label htmlFor='capacity'>Guests</label>
                   <select name="capacity" 
                   id='capacity'
                    className='form-control' 
                   value={capacity}
                    onChange={handleChange}>
                       {people}
              </select>
               </div>
               <div className='form-group'>
               <label htmlFor='price'>Room price ${price}</label>
                   <input type="range" 
                   className='form-control'
                    min={minPrice}
                    max={maxPrice}
                     name="price" 
                     id='price'
                     value={price}
                     onChange={handleChange} />
               </div>
               <div className="form-group">
                   <label htmlFor="price">Room Size</label>
                   <div className="size-inputs">
                       <input
                        className="size-input"
                         type="number"
                          name="minSize"
                           value={minSize}
                           onChange={handleChange}/>
                       <input 
                       className="size-input"
                        type="number"
                         name="maxSize"
                          value={maxSize}
                          onChange={handleChange}/>
                   </div>
                   <div className="form-group">
                       <div className="single-extra">
                       <input
                        type='checkbox'
                         checked={breakfast} 
                         name="breakfast"
                          id="breakfast"
                          onChange={handleChange} />
                       <label htmlFor="breakfast">Breakfast</label>
                       </div>
                       <div className="single-extra">
                       <input type='checkbox'
                        checked={pets}
                         name="pets"
                          id="pets"
                          onChange={handleChange} />
                       <label htmlFor="pets"> Pets</label>
                       </div>
                   </div>
               </div>
               </form> 
        </section>
    )
}

export default FilterRoom
