import React, { useEffect, useState } from 'react'
import  {AiOutlineMenu , AiOutlineSearch , AiOutlineClose , AiFillTag} from "react-icons/ai"
 import { BsFillCartFill,BsPerson } from "react-icons/bs";
 import {TbTruckReturn  } from "react-icons/tb";
 import { FaUserFriends } from "react-icons/fa";
 import { FaGoogleWallet } from "react-icons/fa6";
 import { MdOutlineFavorite  ,MdHelp} from "react-icons/md";

 export default function Nav() {
    const [sidenav , setsidenav] = useState(false)
  
  return (
    <div className='max-w-[1520px] mx-auto flex justify-content-between  items-center p-4'>
        <div className='flex items-center'>
            
            <div className='cursor-pointer'>
            <AiOutlineMenu size={25} 
            onClick={(e)=>setsidenav(!sidenav)}
            />

            </div>
            
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Yum<span className='font-bold'>Eats</span> </h1>

            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p1-text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-2 text-bold'> Free </p>
                <p className='p-2 text-bold'> Delievery</p>
            </div>
        </div>

        <div className='bg-gray-200 rounded-full flex items-center px-2 mx-auto w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch  size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder="Search Meals"/>
        </div>
        
        <button className='bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full'>
            <BsFillCartFill size={20}/>Cart
        </button>

       {sidenav ? (
          <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0 '></div>
        ):('')
        } 
        

        <div className= {
            sidenav
             ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-200'
             :'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-200' }
             >
            <AiOutlineClose className='cursor-pointer absolute right-4 top-4'  size={25} onClick={()=>setsidenav(!sidenav)}/>
            <h2 className='text-2xl p-4'> Yum <span className='text-orange-700 font-bold'> Eats </span> </h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-400'>
                    <li className='text-xl- py-4 flex'> 
                         <BsPerson size={25} className='mr-4 text-white bg-black rounded-full' /> MyAccount
                    </li>

                    <li className='text-xl- py-4 flex'> 
                         <TbTruckReturn  size={25} className='mr-4 text-white bg-black rounded-full' /> Delievery
                    </li>
                    
                    <li className='text-xl- py-4 flex'> 
                         <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full' /> My Favourite
                    </li>
                    
                    <li className='text-xl- py-4 flex'> 
                         <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full' /> My wallet 
                    </li>

                    <li className='text-xl- py-4 flex'> 
                         <MdHelp size={25} className='mr-4 text-white bg-black rounded-full' /> Help
                    </li>
                </ul>
            </nav>
        </div>
     </div>

    )
}
