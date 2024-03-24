import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {topPicks } from "../data/data"
const TopPicks=()=> {
  return (
    <>
      {/* <h1 className='hidden lg:flex align-center  text-orange-500 font-bold text-2xl text-center py-2'> Top picks</h1> */}
      <h1 className='hidden lg:flex  flex items-center justify-center text-orange-500 font-bold text-2xl'> Top picks</h1>
    
      <div className='hidden lg:flex max-w[1520px] m-auto py-2 px-2'>
        
        <Splide options={ { perPage:4 , gap : "0.5rem"  , drag: 'free' , arrows:false} } aria-label="React Splide Example" >
        {topPicks.map((item)=>{
            return(
         <SplideSlide key={item.id}>
                <div className='rounded-3xl relative'  >
                <div className='absolute w-full h-full bg-black/50 rounded-3xl text-white cursor-pointer'>
                    <p className='px-2 pt-4 font-bold text-2xl '> {item?.title } </p>   
                    <p> {item.price} </p>
                    <button className='border-dotted brorder-white text-white  mx-2  absolute bottom-4 left-0'>Add to Cart</button>
                </div> 
                <img src={item.img} alt={item.title} title={item.title}
                className='h-[200px] w-full  object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' />
            </div>
      </SplideSlide>
            )
        })}
        
    </Splide> 
      </div>
{/* 
      
      {topPicks.map((image)=> (
          <div key={image.id}>   
          <img src={image.img} alt={image.title} title={image.title}/>
    
        </div>
      ))}
    */}
    </>
  )
}

export default TopPicks