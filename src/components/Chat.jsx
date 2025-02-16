import React from 'react'
import AvatarComp from './ui/AvatarComp'

const Chat = () => {
  return (
    <div className=''>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}


const Message = () => {
return (
    <div className='flex gap-3 mb-4'>
        <div>
            <AvatarComp size='sm'/>
        </div>

        <div className=''>
            <p className='font-semibold'>username</p>
            <p className='text-md text-gray-600'>Hello this is my commetn. line.share.subd.. hello goode to see u .</p>
        </div>
    </div>
)
}

export default Chat