import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  return (
    <div className='ui relaxed divided list'>
      {videos.map((video, i) => {
        return <VideoItem key={i} video={video} />
      })}
    </div>
  )
}

export default VideoList
