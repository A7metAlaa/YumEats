import React, { useState } from 'react'
import {categories} from "../data/data";

function Categories() {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <div className='text-orange-500 font-bold text-2xl text-center py-2'>

        <h1> Trending Categories</h1>
        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
            {categories.map((category , index)=>(
                <div key={index} className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                    <img className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl'
                    src={category.image}
                    alt={category.name}
                    title={category.name}
                    /> 
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Categories