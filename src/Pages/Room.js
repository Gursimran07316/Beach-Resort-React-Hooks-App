import React,{useContext} from 'react'
import {GloabalContext} from '../context/GlobalState'
import defaultImg from "../images/room-1.jpeg"
import StyledHero from '../Components/StyledHero'
import Banner from '../Components/Banner'
import {Link,useParams} from 'react-router-dom'
 const Room = () => { 
const { slug } = useParams();
const{getRoom}=useContext(GloabalContext)
const room=getRoom(slug)

if(!room){
    return (
        <div className="error">
            <h3>No such room could be found...</h3>
      <Link to="/rooms" className='btn-primary'>
          back to rooms
      </Link>
        </div>
    )
}
const{name,
    images,
    description,
    price,
    size,
    pets,
    breakfast,
    capacity,
    extras}=room
const[main,...defaultImages]=images;
// console.log(defaultImages,main)
return <> 
<StyledHero img={main || defaultImg} >
    <Banner title={`${name} room`}>
      <Link to='/rooms' className="btn-primary">
          back to rooms
      </Link>
        </Banner>
</StyledHero>
<section className="single-room">
    <div className="single-room-images">
        {defaultImages.map((img,i)=>{
 return <img src={img} key={i} alt="room"/>
        })}
    </div>
    <div className='single-room-info'>
        <article className="desc">
            <h3>Details</h3>
    <p>{description}</p>
        </article>
        <article className="info">
            <h3>info</h3>
    <h6>Price : ${price}</h6>
    <h6>Size : ${size}SQFT</h6>
    <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
        </article>
    </div>
</section>
<section className="room-extras">
    <h6>Extras</h6>
    <ul className="extras">
        {extras.map((extra,i)=>{
            return <li key={i}>{extra}</li>
        })}
    </ul>
</section>
</>
 }
export default Room