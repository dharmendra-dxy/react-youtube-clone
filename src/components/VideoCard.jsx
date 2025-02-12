import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const VideoCard = ({item}) => {
    const title = item.snippet.title;


  return (
    <div className='lg:w-full w-[480px] bg-yellow-00 my-2'>

        <img 
        src={item.snippet.thumbnails.high.url} 
        alt="thumbnail" 
        className='rounded-lg cursor-pointer bg-cover'
        />

        <div className='flex mt-2 gap-4'>
            <div>
                <FaUserCircle 
                size={40} 
                className='cursor-pointer'
                />
            </div>

            <div>
                <h2 className='font-medium text-lg leading-5.5'>
                    { title.length>65 ? title.substring(0,65)+". . . . ." : title} 
                </h2>

                <p className='mt-2 text-gray-600'>
                    {   item.snippet.channelTitle}
                </p>
                <p className='text-gray-600 text-sm'>3k views . 7day ago</p>

            </div>
        </div>

    </div>
  )
}

export default VideoCard