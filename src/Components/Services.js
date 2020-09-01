import React,{useState} from 'react'
import Title from './Title'
import {FaCocktail,FaBeer,FaHiking,FaShuttleVan} from 'react-icons/fa'
const Services = () => {
    const[services]=useState([{
        icon:<FaCocktail/>,
        title:'Free CockTial',
details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, optio eius aliquam ipsum voluptas quasi.'
    },{
        icon:<FaHiking/>,
        title:'Endless Hikinng',
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, optio eius aliquam ipsum voluptas quasi.'
    },{
        icon:<FaShuttleVan/>,
        title:'Free shuffle',
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, optio eius aliquam ipsum voluptas quasi.'
    },{
        icon:<FaBeer/>,
        title:'Storngest beer',
        details:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, optio eius aliquam ipsum voluptas quasi.'
    }]);
// console.log(services)
    return (
        <section className='services'>
        <Title title='services'/>
        <div className='services-center'>
{services.map((service,i)=>{
    return <article className='service' key={i}>
        <span>{service.icon}</span>
        <h6>{service.title}</h6>
<p>{service.details}</p>
    </article>
})}
        </div>
        </section>
    )
}

export default Services
