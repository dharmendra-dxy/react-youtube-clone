import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import AvatarComp from './ui/AvatarComp';
import axios from 'axios';
import { API_KEY, YOUTUBE_SINGLE_VIDEO_DETAILS } from '../constants/youtube';

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


  return (
    <div 
    className={`px-2 sm:px-5  ${sidebarToogle ? "lg:w-[80%] sm:w-[70%]" : "lg:w-[95%] w-auto"} `}
    >
        <div className='w-full lg:w-[70%] h-full bg-yellow flex-col'>

            <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${videoId}?si=D_1qjI0w7UfMj0QV`}
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

                <div className='flex mt-2 gap-2 items-center'>
                    <AvatarComp 
                    src='https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
                    size="md"
                    />
                    
                    <div>
                        <h2 
                        className='text-lg font-semibold text-gray-600 cursor-pointer hover:text-gray-700'>
                            {videoDetails?.snippet?.channelTitle}
                        </h2>
                        <h2 className='text-sm font-semibold text-gray-600'>300k subs</h2>
                    </div>

                    <button className='bg-red-600 rounded-4xl px-4 py-2 text-white font-semibold text-sm cursor-pointer ml-10 hover:bg-red-700'>
                        Subscribe
                    </button>
                </div>
            </div>

        </div>
        


    </div>
  )
}

export default WatchVideo