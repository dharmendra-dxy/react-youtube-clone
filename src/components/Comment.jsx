import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import AvatarComp from './ui/AvatarComp'
import { LuSendHorizontal } from 'react-icons/lu'
import Chat from './Chat'

const Comment = () => {
  return (
    <div className=''>
        <div className='flex justify-between items-center px-4 border-b border-gray-400 pb-3'>
            <h2 className='flex items-center gap-2'>
                Comment Section 
                <IoIosArrowDown size={20}/>
            </h2>
            <div>
                <HiDotsVertical 
                size={20}  
                className='cursor-pointer hover:bg-gray-300 hover:rounded-full'
                />
            </div>
        </div>

        <div className='px-4 py-2 overflow-y-auto h-[28rem]'>
            <Chat/>
        </div>

        <div className='px-4 border-t pt-2 border-gray-400'>
            <div className='flex gap-4 items-center'>
                <div><AvatarComp size="md"/></div>
                <div className='w-full'>
                    <input 
                    type="text" 
                    placeholder='Send message....'
                    className='text-gray-500 border-b outline-none border-gray-400 px-2 py-2 w-full'
                    />
                </div>
                <div>
                    <button
                    className='bg-gray-300 cursor-pointer p-2 rounded-full items-center hover:bg-gray-400'
                    >
                        <LuSendHorizontal size={20}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Comment