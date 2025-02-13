import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../constants/youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

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
          <Link key={item.id} to={`/watch?v=${item.id}`}>
            <VideoCard  item={item} />
          </Link>
        )
      }
    </div>
  )
}

export default VideoContainer