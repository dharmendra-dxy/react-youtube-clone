import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import AvatarComp from './ui/AvatarComp';
import axios from 'axios';
import { API_KEY, YOUTUBE_SINGLE_VIDEO_DETAILS } from '../constants/youtube';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { HiDotsHorizontal, HiDotsVertical } from 'react-icons/hi';
import Comment from './Comment';

const WatchVideo = () => {

    // get sidebar state for width from redux:
    const sidebarToogle = useSelector((state)=> state.app.sidebarToogle);

    // searchParams for video id:
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const [videoDetails, setVideoDetails] = useState([]);
    const fetchVideoDetails = async ()=> {
        try {
            const res = await axios.get(`${YOUTUBE_SINGLE_VIDEO_DETAILS}&id=${videoId}&key=${API_KEY}`);
            setVideoDetails(res?.data?.items[0]);
            console.log(res?.data?.items[0]);
        } 
        catch (error) {
            console.log("Error in fetching video ", error);    
        }
    }

    useEffect(()=>{
        fetchVideoDetails();
    },[]);

    // count:
    let likesCount = videoDetails?.statistics?.likeCount;
    let viewsCount = videoDetails?.statistics?.viewCount;
    let commentsCount = videoDetails?.statistics?.commentCount;



  return (
    <div 
    className={`px-2 sm:px-5 lg:flex lg:gap-3 ${sidebarToogle ? "lg:w-[80%] sm:w-[70%]" : "lg:w-[95%] w-auto"} `}
    >

        <div className='w-full lg:w-[65%] bg-yellow mb-6 h-auto flex-col'>

            <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            className='lg:w-full lg:h-[70%] rounded-xl'
            />

            <div className='mt-3'>
                <h1 className='text-2xl font-bold text-gray-800' >
                    {videoDetails?.snippet?.title}
                </h1>
            </div>

            <div className='lg:flex  lg:justify-between bg-yellow-20\0'>

                <div className='flex mt-2 gap-2 items-center'>
                    <AvatarComp
                    size="md"
                    />
                        
                    <div>
                        <h2 
                        className='text-lg font-semibold text-gray-500 cursor-pointer hover:text-gray-700'>
                            {videoDetails?.snippet?.channelTitle}
                        </h2>
                        <h2 className='text-sm font-semibold text-gray-600'>300k subs</h2>
                    </div>

                    <button className='bg-red-600 rounded-4xl px-4 py-2 text-white font-semibold text-sm cursor-pointer ml-10 hover:bg-red-700'>
                        Subscribe
                    </button>
                </div>

                <div className='flex items-center lg:gap-3 gap-8 mt-4 lg:mt-0'>

                    <div className='flex'>
                        <div className='flex border-r border-gray-600 pr-3 gap-3 bg-gray-200  hover:bg-gray-300 px-4 py-2 rounded-l-full cursor-pointer'>
                            <AiOutlineLike  size={20}/>
                            <p className='font-semibold'>{likesCount}</p>
                        </div>

                        <div className='pr-3 gap-3 bg-gray-200  hover:bg-gray-300 px-4 py-2 rounded-r-full cursor-pointer'>
                            <AiOutlineDislike size={20}/>
                        </div>
                    </div>

                    <div className='flex gap-2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full'>
                        <IoIosShareAlt size={20} className='cursor-pointer'/>
                        <p>Share</p>
                    </div>

                    <div className='flex gap-2 bg-gray-200 hover:bg-gray-300 px-2 py-2 rounded-full'>
                        <HiDotsHorizontal size={20} className='cursor-pointer'/>
                    </div>

                </div>
            </div>
            

        </div>
        
        <div className='lg:w-[35%] border border-gray-400 rounded-lg h-fit py-4'>
            <Comment/>
        </div>

    </div>
  )
}

export default WatchVideo