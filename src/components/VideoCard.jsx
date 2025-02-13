import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_KEY, YOUTUBE_CHANNEL_API } from '../constants/youtube';
import AvatarComp from './ui/AvatarComp';

const VideoCard = ({item}) => {
    const title = item.snippet.title;
    const CHANNEL_ID= item.snippet.channelId;

    const [avatarSrc, setAvatarSrc] = useState([]);
    const fetchYTChannel = async () => {
        try{
            const res =await axios.get(`${YOUTUBE_CHANNEL_API}&id=${CHANNEL_ID}&key=${API_KEY}`);
            setAvatarSrc(res.data.items[0].snippet.thumbnails.high.url);
        }
        catch(error){
            console.log("Error while fetching YTChannel: ", error);
        }
    }

    useEffect(()=> {
        fetchYTChannel();
    }, []);

  return (
    <div className='lg:w-full w-[480px] bg-yellow-00 my-2'>

        <img 
        src={item.snippet.thumbnails.high.url} 
        alt="thumbnail" 
        className='rounded-lg cursor-pointer bg-cover w-full '
        />

        <div className='flex mt-2 gap-4'>
            <div>
                <AvatarComp src={avatarSrc}/>
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