import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdAddCircle, IoMdNotificationsOutline } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <div className=''>
    <div className='flex fixed top-0 right-0 left-0 items-center justify-between px-2 sm:px-5 bg-white'>
        
        <div>
            <div className='flex items-center gap-4'>
                <RxHamburgerMenu size={25} className='cursor-pointer'/>
                <img 
                src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-650-80.jpg" 
                alt=""
                className='h-16 cursor-pointer' 
                />
            </div>

        </div>

        <div className='w-[40%] border border-gray-400 rounded-full'>
            <div className='flex items-center'>
                <input 
                type="text"
                placeholder='Search' 
                className='outline-none px-6 py-2 w-full border-r border-gray-400 cursor-pointer'
                />
                
                <button className='px-4 py-2 rounded-r-full'>
                    <CiSearch  size={25} className='cursor-pointer'/>
                </button>
            </div>
        </div>

        <div className='flex items-center gap-4'>
            <IoMdAddCircle size={25} className='cursor-pointer'/>
            <IoMdNotificationsOutline size={25} className='cursor-pointer'/>
            <FaUserCircle size={40} className='cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}

export default Navbar