import React from 'react'
import VideoContainer from './VideoContainer'
import FeedList from './FeedList'
import { useSelector } from 'react-redux'

const Feed = () => {
  // get sidebar state for width from redux:
  const sidebarToogle = useSelector((state)=> state.app.sidebarToogle);


  return (
    <div 
    className={`px-2 sm:px-5  ${sidebarToogle ? "lg:w-[80%] sm:w-[70%]" : "lg:w-[95%] w-auto"} `}>
        <FeedList/>
        <VideoContainer/>
    </div>
  )
}

export default Feed