import React from 'react'
import VideoContainer from './VideoContainer'
import FeedList from './FeedList'

const Feed = () => {
  return (
    <div className='px-2 sm:px-5'>
        <FeedList/>
        <VideoContainer/>
    </div>
  )
}

export default Feed