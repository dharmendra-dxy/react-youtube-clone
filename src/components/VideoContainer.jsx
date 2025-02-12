import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_VIDEO_API } from '../constants/youtube';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const fetchYTVideos = async ()=> {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      setVideos(res?.data.items);
      console.log(res?.data.items);
    } catch (error) {
      console.log(error);
    }
    
  }

  // api calling:
  useEffect(()=>{
    fetchYTVideos();
  },[]);


  return (
    <div 
    className='px-2 mt-4 grid xl:grid-cols-3 grid-cols-2 w-full gap-3 mx-auto mb-10'>
      {
        videos.length>0 && videos.map((item) => 
          <VideoCard key={item.id} item={item} />
        )
      }
    </div>
  )
}

export default VideoContainer